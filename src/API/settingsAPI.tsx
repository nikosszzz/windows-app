import { themeAPI } from "./themeAPI";

export async function settingsAPI(): Promise<void> {
    console.log("[API] Settings initialized");

    const theme = localStorage.getItem("theme");

    console.log("[API] Fetching userStore Data");
    console.log("------- BEGIN USER DATA LIST -------");
    if (theme) console.log("Theme: " + theme);
    console.log("------- END USER DATA LIST -------");
    console.log("[API] Fetched userStore Data");

    /**
     * Themes API initialization
     * 
     */
    await themeAPI.handler();
}
