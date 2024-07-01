use web_sys::js_sys::{Array, Object};

pub struct Options {
    resize_width: u32,
    algorithm: String,
    quality: u8,
}

impl Options {
    pub fn new(resize_width: u32, algorithm: String, quality: u8) -> Self {
        Self {
            resize_width,
            algorithm,
            quality,
        }
    }

    pub fn from_js_value(object: Object) -> Self {
        let mut options = Options::new(0, String::from("Nearest"), 65);

        for kv in Object::entries(&object) {
            let kv = Array::from(&kv);
            let key = kv.get(0).as_string();
            if let Some(key) = key {
                let key = key.as_str();
                match key {
                    "resizeWidth" => {
                        let value = kv.get(1).as_f64().unwrap_or(0.0);
                        let value = value as u32;
                        options.resize_width = value;
                    }
                    "algorithm" => {
                        let value = kv.get(1).as_string().unwrap_or(String::from("Nearest"));
                        options.algorithm = value;
                    }
                    "quality" => {
                        let value = kv.get(1).as_f64().unwrap_or(65.0);
                        let value = value as u8;
                        options.quality = value;
                    }
                    _ => {}
                }
            }
        }

        options
    }
}
