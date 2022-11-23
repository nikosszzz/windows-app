/**
 * @name Theme button controls.
 * 
 */
export class themeAPI {
    /**
     * @name Themes Initialiser
     * @description Handles the app init theme loading
     * 
     */
    public static async init(): Promise<void> {
        if (typeof window !== "undefined") {
            if (localStorage.getItem("theme") === undefined) {
                const isDefaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                localStorage.setItem("theme", isDefaultDark ? "dark" : "light");

                document.documentElement.className = "theme-" + localStorage.getItem("theme");
            } else {
                if (localStorage.getItem("theme") === "system") {
                    document.documentElement.className = "theme-" + await (await import("@tauri-apps/api/window")).appWindow.theme();
                } else {
                    document.documentElement.className = "theme-" + localStorage.getItem("theme");
                }
            }
        }
    }
    /**
     * @name Themes Handler
     * @description Starts the Element handling for settings
     * 
     */
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
                rootTheme.className = "theme-" + await (await import("@tauri-apps/api/window")).appWindow.theme();
                localStorage.setItem("theme", "system");
            }
        };
    }
}
