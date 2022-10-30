import { appWindow } from "@tauri-apps/api/window";
/**
 * Theme button controls.
 * 
 */
export class themeAPI {
    public static init() {
        const isDefaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        localStorage.setItem("theme", isDefaultDark ? "dark" : "light");

        return localStorage.getItem("theme");
    }
    public static async handler() {
        console.log("[API] Themes handler initialized");
        const themeValue = document.querySelector("#theme") as HTMLInputElement;

        themeValue.onchange = async(): Promise<void> => {
            if (themeValue.value === "light") {
                localStorage.setItem("theme", themeValue.value);
            }
            if (themeValue.value === "dark") {
                localStorage.setItem("theme", themeValue.value);
            }
            if (themeValue.value === "system") {
                localStorage.setItem("theme", await appWindow.theme() as string);
            }
        };

    }
}
