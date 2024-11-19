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
    let content = create_signal("".to_string());

    let rotation = create_signal("0".to_string());
    let color1 = create_signal("#be3c3c".to_string());
    let color2 = create_signal("#000".to_string());

    let gradient = create_selector(move || {
        format!("linear-gradient({}deg, {}, {})", rotation, color1, color2)
    });

    let img_style = create_selector(move || format!("background: {}", gradient));

    view! {
        div (class="container") {
            div(class="controls") {
                input(value=color1, r#type="color", on:input=move |event: web_sys::Event| {
                    let target_as_input_elem = get_target_as::<HtmlInputElement>(event);
                    let input_value = target_as_input_elem.value();
                    color1.set(input_value);
                })
                input(value=color2, r#type="color", on:input=move |event: web_sys::Event| {
                    let target_as_input_elem = get_target_as::<HtmlInputElement>(event);
                    let input_value = target_as_input_elem.value();
                    color2.set(input_value);
                })
                input(r#type="range", min="0", max="360", on:input=move |event: web_sys::Event| {
                    let target_as_input_elem = get_target_as::<HtmlInputElement>(event);
                    let input_value = target_as_input_elem.value();
                    rotation.set(input_value);
                })

                button(on:click=move |_| async move {
                    toPng("#gradientImg".to_string(), "my_img".to_string()).await;
                }) { "Save" }
            }

            div (style=img_style, class="gradient", id="gradientImg") {
                (content)
            }
        }
    }
}

fn main() {
    sycamore::render(app);
}
