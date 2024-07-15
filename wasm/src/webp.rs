use std::io::Cursor;

use crate::{logger::logger, options::Options};

use image::{imageops::FilterType, DynamicImage, GenericImageView, ImageFormat};
use image_webp::{WebPDecoder, WebPEncoder};
use web_sys::js_sys::Object;

pub fn convert_webp(image: &DynamicImage, js_options: &Object) -> DynamicImage {
    let mut options = Options::new();
    options.from_js_value(js_options);

    if options.resize_width > 0 {
        let (width, height, filter) = get_image_resize_data(image, &options);
        image.resize(width, height, filter);
    }

    let mut buf = Vec::new();
    let _ = image.write_to(&mut Cursor::new(&mut buf), ImageFormat::Jpeg);

    let mut webp_buf = Vec::new();
    let webp_encoder = WebPEncoder::new(webp_buf);
    let (width, height) = image.dimensions();
    let _ = webp_encoder.encode(&buf.as_slice(), width, height, image_webp::ColorType::Rgb8);


    // let webp_encoder = WebPEncoder::new(image);
    // let webp_memory = webp_encoder.encode(options.quality as f32);

    // let webp_encoder =
    //     Encoder::from_image(image).expect(&logger("error", "create webp encoder error"));

    // let webp_memory = webp_encoder.encode(options.quality as f32);

    // let decoder = Decoder::new(&webp_memory);

    // let webp_image = decoder.decode().expect(&logger("error", "image"));

    // webp_image.to_image()

    unimplemented!()
}

fn get_image_resize_data(image: &DynamicImage, options: &Options) -> (u32, u32, FilterType) {
    let (width, height) = image.dimensions();
    let width = width as f64;
    let height = height as f64;

    let filter = match options.algorithm.as_str() {
        "Nearest" => FilterType::Nearest,
        "Triangle" => FilterType::Triangle,
        "CatmullRom" => FilterType::CatmullRom,
        "Gaussian" => FilterType::Gaussian,
        "Lanczos3" => FilterType::Lanczos3,
        _ => FilterType::Nearest,
    };

    let aspect_ratio = width / height;
    let width = options.resize_width as f64;
    let height = (width / aspect_ratio) as u32;

    (width as u32, height, filter)
}
