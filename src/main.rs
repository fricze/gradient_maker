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
fn app() -> View {
    let rotation = create_signal("0".to_string());

    let colors = create_signal(vec![
        "#be3c3c".to_string(),
        "#000".to_string(),
        "#ffffff".to_string(),
    ]);

    let text = create_signal("".to_string());

    let gradient = create_memo(move || {
        let colors_values = colors.get_clone();
        format!(
            "linear-gradient({}deg, {}, {}, {})",
            rotation, colors_values[0], colors_values[1], colors_values[2]
        )
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

    view! {
        div (class="container") {
            div(class="controls") {
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

            div (style=img_style, class="gradient", id="gradientImg") {
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
