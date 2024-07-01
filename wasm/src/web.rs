use std::io::Cursor;

use image::{load_from_memory, DynamicImage, ImageFormat};
use wasm_bindgen::JsValue;
use wasm_bindgen_futures::JsFuture;
use web_sys::{
    js_sys::{Array, ArrayBuffer, Uint8Array},
    File, FilePropertyBag,
};

use crate::logger::logger;

pub async fn load_image_from_js_file(js_file: &File) -> DynamicImage {
    let filename = js_file.name();
    let array_buffer = JsFuture::from(js_file.array_buffer()).await.expect(&logger(
        "error",
        format!("can't get arrayBuffer from {}", filename).as_str(),
    ));
    let unit8_array = Uint8Array::new(&array_buffer);
    let buffer = unit8_array.to_vec();
    let buffer = buffer.as_slice();
    let image = load_from_memory(buffer).expect(&logger(
        "error",
        format!("can't convert file: {} to dynamicImage", filename).as_str(),
    ));
    image
}

pub async fn load_js_file_from_webp(image: &DynamicImage) -> File {
    let mut buffer = Cursor::new(Vec::new());
    // TODO will update
    image
        .write_to(&mut buffer, ImageFormat::Png)
        .expect(&logger("error", "write to buffer failed"));
    let buffer = buffer.into_inner();

    let array_buffer = ArrayBuffer::new(buffer.len() as u32);
    let buffer = unsafe { Uint8Array::view(&buffer[..]) };
    let buffer = JsValue::from(buffer);
    let array_buffer_view: Uint8Array = Uint8Array::new(&array_buffer);
    array_buffer_view.set(&buffer, 0);
    let array_buffer = JsValue::from(array_buffer);

    let file_bits = Array::new_with_length(1);
    file_bits.set(0, array_buffer);
    let file_bits = JsValue::from(file_bits);

    let mut options = FilePropertyBag::new();
    // TODO will update
    options.type_("image/png");
    let file =
        File::new_with_buffer_source_sequence_and_options(&file_bits, "convert.png", &options)
            .expect(&logger("error", "create File object failed"));

    file
}
