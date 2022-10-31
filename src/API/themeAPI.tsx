//import { appWindow } from "@tauri-apps/api/window";
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
    // FIXME: Change this when Tauri adds theme setter
    /*public static async handler() {
        console.log("[API] Themes handler initialized");
        const themeValue = document.querySelector("#themeOptions") as HTMLInputElement;
        const rootTheme = document.querySelector("#theme") as Element;

        themeValue.onchange = async(): Promise<void> => {
            if (themeValue.value === "light") {
                rootTheme.className = "light";
                localStorage.setItem("theme", themeValue.value);
            }
            if (themeValue.value === "dark") {
                rootTheme.className = "dark";
                localStorage.setItem("theme", themeValue.value);
            }
            if (themeValue.value === "system") {
                rootTheme.className = await appWindow.theme() as string;
                localStorage.setItem("theme", await appWindow.theme() as string);
            }
        };

    } */
}
