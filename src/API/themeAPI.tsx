import localforage from "localforage";
/**
 * Theme button controls.
 * 
 */
export function themeAPI(): void {
    console.log("[API] Themes handler initialized");
    const themeValue = document.querySelector("#theme") as HTMLInputElement;

    themeValue.onchange = (): void => {
        if (themeValue.value === "light") {
            localforage.setItem("theme", themeValue);
            updateTheme();
        }
        if (themeValue.value === "dark") {
            localforage.setItem("theme", themeValue);
            updateTheme();
        }
        if (themeValue.value === "system") {
            localforage.setItem("theme", themeValue);
            updateTheme();
        }
    };

    function updateTheme(): void {
        window.theme = themeValue.value;
    }
}
