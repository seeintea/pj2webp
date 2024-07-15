mod logger;
mod options;
mod web;
mod webp;

use std::panic;
use wasm_bindgen::prelude::*;
use web_sys::{js_sys::Object, File};

extern crate console_error_panic_hook;

#[wasm_bindgen(js_name = "getConvertFile")]
pub async fn get_convert_file(file: File, options: Object) -> File {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
    let image = web::load_image_from_js_file(&file).await;
    let webp_image = webp::convert_webp(&image, &options);
    let webp_file = web::load_js_file_from_webp(&webp_image).await;
    webp_file
}
