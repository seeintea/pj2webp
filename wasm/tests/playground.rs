use pj2webp_wasm::get_convert_file;
use wasm_bindgen::{prelude::*, JsValue};
use wasm_bindgen_test::*;
use web_sys::{
    js_sys::{Array, ArrayBuffer, Object, Uint8Array},
    File, FilePropertyBag,
};

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen]
extern "C" {
    // Use `js_namespace` here to bind `console.log(..)` instead of just
    #[wasm_bindgen(js_namespace = console)]
    fn log(str: &str);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_js_value(js_value: &JsValue);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_js_file(file: &File);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u8_array(uint8_array: &Uint8Array);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_array_buffer(array_buffer: &ArrayBuffer);
}

#[wasm_bindgen_test]
async fn convert() {
    let origin_data = vec![
        137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 2, 0, 0, 0, 2, 8, 2,
        0, 0, 0, 253, 212, 154, 115, 0, 0, 0, 9, 112, 72, 89, 115, 0, 0, 22, 37, 0, 0, 22, 37, 1,
        73, 82, 36, 240, 0, 0, 0, 17, 116, 69, 88, 116, 83, 111, 102, 116, 119, 97, 114, 101, 0,
        83, 110, 105, 112, 97, 115, 116, 101, 93, 23, 206, 221, 0, 0, 0, 23, 73, 68, 65, 84, 8,
        153, 99, 252, 253, 227, 249, 191, 127, 127, 153, 254, 253, 251, 251, 247, 239, 63, 0, 82,
        5, 11, 200, 147, 250, 5, 221, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130,
    ];

    let data_len: u32 = origin_data.len().try_into().unwrap();
    let array_buffer = ArrayBuffer::new(data_len);
    let unit8_view = Uint8Array::new(&array_buffer);
    let image_data: &[u8] = origin_data.as_slice();
    let uint8_array = unsafe { Uint8Array::view(image_data) };
    let js_image_data = JsValue::from(uint8_array);
    unit8_view.set(&js_image_data, 0);

    let js_array_buffer = JsValue::from(array_buffer);
    let array: Array = Array::new_with_length(1);
    array.set(0, js_array_buffer);

    let file_bits = JsValue::from(array);
    let mut options = FilePropertyBag::new();
    options.type_("image/png");
    let file = File::new_with_buffer_source_sequence_and_options(&file_bits, "image", &options);
    let file = match file {
        Ok(file) => file,
        Err(error) => {
            log_js_value(&error);
            return;
        }
    };

    let file = get_convert_file(file, Object::new()).await;
    log_js_file(&file)
}
