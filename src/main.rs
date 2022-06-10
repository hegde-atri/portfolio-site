use yew::prelude::*;

#[function_component(App)]
fn app() -> Html {
    html! {
        <>
            <h1>{ "Testing Yew WASM website" }</h1>
            <div>
                <h3>{"Just some p-tags"}</h3>
                <p>{"First p-tag"}</p>
                <p>{"Second p-tag"}</p>
            </div>
        </>
    }
}

fn main() {
    yew::start_app::<App>();
}
