use web_sys::js_sys::{Array, Object};

pub struct Options {
    pub resize_width: u32,
    pub algorithm: String,
    pub quality: u8,
}

impl Options {
    pub fn new() -> Self {
        Self {
            resize_width: 0,
            algorithm: String::from("Nearest"),
            quality: 65,
        }
    }

    pub fn from_js_value(&mut self, object: &Object) {
        for kv in Object::entries(object) {
            let kv = Array::from(&kv);
            let key = kv.get(0).as_string();
            if let Some(key) = key {
                let key = key.as_str();
                match key {
                    "resizeWidth" => {
                        let value = kv.get(1).as_f64().unwrap_or(0.0);
                        let value = value as u32;
                        self.resize_width = value;
                    }
                    "algorithm" => {
                        let value = kv.get(1).as_string().unwrap_or(String::from("Nearest"));
                        self.algorithm = value;
                    }
                    "quality" => {
                        let value = kv.get(1).as_f64().unwrap_or(65.0);
                        let value = value as u8;
                        self.quality = value;
                    }
                    _ => {}
                }
            }
        }
    }
}
