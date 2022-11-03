//import { appWindow } from "@tauri-apps/api/window";

import { appWindow } from "@tauri-apps/api/window";

/**
 * Theme button controls.
 * 
 */
export class themeAPI {
    public static async init(): Promise<void> {
        if (localStorage.getItem("theme") == undefined) {
            const isDefaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            localStorage.setItem("theme", isDefaultDark ? "dark" : "light");

            document.documentElement.className = "theme-" + localStorage.getItem("theme");
        } else {
            console.log(localStorage.getItem("theme") as string);
            if (localStorage.getItem("theme") === "system") {
                document.documentElement.className = "theme-" + await appWindow.theme();
            } else {
                document.documentElement.className = "theme-" + localStorage.getItem("theme");
            }
        }
    }
    public static async handler(): Promise<void> {
        console.log("[API] Themes handler initialized");
        const themeValue = document.querySelector("#themeOptions") as HTMLSelectElement;
        const rootTheme = document.documentElement;

        themeValue.onchange = async (): Promise<void> => {
            if (themeValue.value === "light") {
                rootTheme.className = "theme-light";
                localStorage.setItem("theme", themeValue.value);
            }
            if (themeValue.value === "dark") {
                rootTheme.className = "theme-dark";
                localStorage.setItem("theme", themeValue.value);
            }
            if (themeValue.value === "system") {
                rootTheme.className = "theme-" + await appWindow.theme();
                localStorage.setItem("theme", "system");
            }
        };
    }
}
