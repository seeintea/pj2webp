mod utils;

use wasm_bindgen::prelude::*;
use web_sys::{js_sys::Object, File};

#[wasm_bindgen]
pub fn convert_to_webp(file: File, _options: Object) -> File {
    utils::set_panic_hook();
    // TODO
    // 1. Read the file
    // 2. Convert it to webp
    // 3. Return the new file
    file
}
