use sycamore::prelude::*;
use wasm_bindgen::{prelude::wasm_bindgen, JsCast, JsValue};
use web_sys::{Event, HtmlInputElement};

#[wasm_bindgen(module = "/js/index.js")]
extern "C" {
    async fn toJpeg(selector: String) -> JsValue;
    async fn toPng(selector: String, name: String) -> JsValue;
}

fn get_target_as<T: JsCast>(event: Event) -> T {
    let target = event.target().unwrap();
    target.dyn_into().unwrap()
}

#[component]
fn GradientSelector(selected: Signal<String>) -> View {
    let linear = "linear";
    let radial = "radial";

    view! {
        form {
            fieldset {
                legend { "Gradient Type:" }

                div {
                    input(
                        r#type="radio",
                        id="linear",
                        name="gradient",
                        value="linear",
                        on:input=move |_| selected.set(linear.to_string()),
                        checked=(*selected.get_clone() == linear.to_string())
                    )
                    label(r#for="linear") { "Linear" }
                }

                div {
                    input(
                        r#type="radio",
                        id="radial",
                        name="gradient",
                        value="radial",
                        on:input=move |_| selected.set(radial.to_string()),
                        checked=(*selected.get_clone() == radial.to_string())
                    )
                    label(r#for="radial") { "Radial" }
                }
            }
        }
    }
}

#[component]
fn app() -> View {
    let rotation = create_signal("0".to_string());
    let noise1 = create_signal("".to_owned());

    let gradient_type = create_signal("linear".to_string());

    let colors = create_signal(vec![
        "#be3c3c".to_string(),
        "#000".to_string(),
        "#ffffff".to_string(),
    ]);

    let text = create_signal("".to_string());

    let gradient = create_memo(move || {
        let colors_values = colors.get_clone();
        let g_type = gradient_type.get_clone();

        if g_type == "radial" {
            return format!(
                "radial-gradient(circle, {}, {}, {})",
                colors_values[0], colors_values[1], colors_values[2]
            );
        }

        return format!(
            "linear-gradient({}deg, {}, {}, {})",
            rotation, colors_values[0], colors_values[1], colors_values[2]
        );
    });

    let img_style = create_memo(move || format!("background: {}", gradient));

    // let color1 = colors.get_clone()[0].clone();
    // let color2 = colors.get_clone()[1].clone();

    let colors_view = colors
        .get_clone()
        .into_iter()
        .enumerate()
        .map(|(i, color)| {
            view! {
                input(value=color, r#type="color", on:input=move |event: web_sys::Event| {
                    let target_as_input_elem = get_target_as::<HtmlInputElement>(event);
                    let input_value = target_as_input_elem.value();

                    let mut val = colors.get_clone_untracked();
                    val[i] = input_value;
                    colors.set(val);
                })
            }
        })
        .collect::<Vec<View>>();

    let gradient_class = create_memo(move || "gradient".to_string() + &noise1.get_clone());

    view! {
        div (class="container") {
            div(class="controls") {
                label {
                    "Noise"

                    input(r#type="checkbox", on:input=move |event: web_sys::Event| {
                        let target_as_input_elem = get_target_as::<HtmlInputElement>(event);
                        let input_value = target_as_input_elem.checked();
                        noise1.set(if input_value { " noise1".to_owned() } else { "".to_owned() });
                    })
                }

                (GradientSelector(gradient_type))
                (colors_view)
                input(r#type="range", min="0", max="360", on:input=move |event: web_sys::Event| {
                    let target_as_input_elem = get_target_as::<HtmlInputElement>(event);
                    let input_value = target_as_input_elem.value();
                    rotation.set(input_value);
                })

                input(r#type="text", value=text, on:input=move |event: web_sys::Event| {
                    let target_as_input_elem = get_target_as::<HtmlInputElement>(event);
                    let input_value = target_as_input_elem.value();
                    text.set(input_value);
                })

                button(on:click=move |_| async move {
                    toPng("#gradientImg".to_string(), "my_img".to_string()).await;
                }) { "Save" }
            }

            div (style=img_style, class="gradient".to_owned() + &noise1.get_clone(), id="gradientImg") {
                span {
                    (text)
                }
            }
        }
    }
}

fn main() {
    sycamore::render(app);
}
