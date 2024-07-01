mod logger;
mod options;
mod web;

use std::panic;
use wasm_bindgen::prelude::*;
use web_sys::{js_sys::Object, File};

extern crate console_error_panic_hook;

#[wasm_bindgen(js_name = "getConvertFile")]
pub async fn get_convert_file(file: File, _options: Object) -> File {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
    let image = web::load_image_from_js_file(&file).await;
    // TODO convert
    let webp_file = web::load_js_file_from_webp(&image).await;
    webp_file
}
