use sycamore::prelude::*;
use wasm_bindgen::{prelude::wasm_bindgen, JsCast, JsValue};
use web_sys::{Event, HtmlInputElement};

#[wasm_bindgen(module = "/js/index.js")]
extern "C" {
    async fn toJpeg(selector: String) -> JsValue;
    async fn toPng(selector: String, name: String) -> JsValue;
}

// fn get_target_as<T: JsCast>(event: Event) -> T {
//     let target = event.target().unwrap();
//     target.dyn_into().unwrap()
// }

fn get_target_as<T: JsCast>(event: Event) -> Option<T> {
    event.target().and_then(|t| t.dyn_into::<T>().ok())
}

#[component]
fn GradientSelector(selected: Signal<String>) -> View {
    let linear = "linear";
    let radial = "radial";

    view! {
        form {
            fieldset {
                legend { "Gradient Type" }

                label(class="horizontal-label") {
                    input(
                        r#type="radio",
                        id=linear,
                        name="gradient",
                        value=linear,
                        on:input=move |_| selected.set(linear.to_string()),
                        checked=(*selected.get_clone() == linear.to_string())
                    )
                    span { "Linear" }
                }

                label(class="horizontal-label") {
                    input(
                        r#type="radio",
                        id=radial,
                        name="gradient",
                        value=radial,
                        on:input=move |_| selected.set(radial.to_string()),
                        checked=(*selected.get_clone() == radial.to_string())
                    )
                    span { "Radial" }
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

    let text_color = create_signal("#23d166".to_string());
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

    let img_style =
        create_memo(move || format!("background: {}; color: {};", gradient, text_color));

    let colors_view = colors
        .get_clone()
        .into_iter()
        .enumerate()
        .map(|(i, color)| {
            view! {
                input(value=color, r#type="color", on:input=move |event: web_sys::Event| {
                    match get_target_as::<HtmlInputElement>(event) {
                        None => {},
                        Some(target) => {
                            let input_value = target.value();

                            let mut val = colors.get_clone_untracked();
                            val[i] = input_value;
                            colors.set(val);
                        }
                    }
                })
            }
        })
        .collect::<Vec<View>>();

    let gradient_class = create_memo(move || "gradient".to_string() + &noise1.get_clone());
    let rotation_style = create_memo(move || {
        if gradient_type.get_clone() == "radial" {
            "display: none;"
        } else {
            ""
        }
    });

    view! {
        div (class="container") {
            div(class="controls") {
                label(id="noise", class="horizontal-label") {
                    span {
                        "Add noise"
                    }

                    input(r#type="checkbox", on:input=move |event: web_sys::Event| {
                        match get_target_as::<HtmlInputElement>(event) {
                            None => {},
                            Some(target) => {
                                let input_value = target.checked();
                                noise1.set(if input_value { " noise1".to_owned() } else { "".to_owned() });
                            }
                        }
                    })
                }

                (GradientSelector(gradient_type))

                label(id="colors") {
                    span(class="legend") {
                        "Colors"
                    }

                    div(id="colors_inputs") {
                        (colors_view)
                    }
                }

                label(id="rotation", style=rotation_style) {
                    span(class="legend") {
                        "Rotation"
                    }

                    input(r#type="range", min="0", max="360", on:input=move |event: web_sys::Event| {
                        match get_target_as::<HtmlInputElement>(event) {
                            None => {},
                            Some(target) => {
                                let input_value = target.value();
                                rotation.set(input_value);
                            }
                        }
                    })
                }


                label(id="textColor") {
                    span(class="legend") {
                        "Text Color"
                    }

                    div(id="colors_inputs") {
                        input(value=text_color, r#type="color", on:input=move |event: web_sys::Event| {
                            match get_target_as::<HtmlInputElement>(event) {
                                None => {},
                                Some(target) => {
                                    let input_value = target.value();
                                    text_color.set(input_value)
                                }
                            }
                        })
                    }
                }

                label(id="text") {
                    span {
                        "Text"
                    }
                    input(r#type="text", value=text, on:input=move |event: web_sys::Event| {
                        match get_target_as::<HtmlInputElement>(event) {
                            None => {},
                            Some(target) => {
                                let input_value = target.value();
                                text.set(input_value);
                            }
                        }
                    })
                }

                button(on:click=async move |_| {
                    toPng("#gradientImg".to_string(), "my_img".to_string()).await;
                }) { "Save" }
            }

            div (style=img_style, class=gradient_class, id="gradientImg") {
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
