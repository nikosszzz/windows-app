#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("Error while running Application.");
}

#[tauri::command]
fn openDevTools() -> _ {
   tauri::window::Window::open_devtools;

   Ok(());
}
