pub fn logger(level: &str, msg: &str) -> String {
    format!("[{}]: {}", level, msg)
}
