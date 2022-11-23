import { themeAPI } from "./themeAPI";


/**
 * @name Settings API
 * @description Initialises the Settings API
 * 
 */
export async function settingsAPI(): Promise<void> {
    console.log("[API] Settings initialized");

    const theme = localStorage.getItem("theme") as string;

    console.log("[API] Fetching userStore Data");
    console.log("------- BEGIN USER DATA LIST -------");
    if (theme) console.log("Theme: " + theme);
    console.log("------- END USER DATA LIST -------");
    console.log("[API] Fetched userStore Data");

    // Set theme button to set theme
    (document.querySelector("#themeOptions") as HTMLSelectElement).value = theme;

    /**
     * Themes API initialization
     * 
     */
    await themeAPI.handler();
}
