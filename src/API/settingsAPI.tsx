import { themeAPI } from "./themeAPI";

//import { themeAPI } from "./themeAPI";
export async function settingsAPI(): Promise<void> {
    console.log("[API] Settings initialized");

    // devtools toggle
    const devToolsToggle = document.querySelector("#devtools-toggle") as HTMLInputElement;
    const theme = localStorage.getItem("theme");
    const devTools = localStorage.getItem("devtoolsStartup");

    console.log("[API] Fetching userStore Data");
    console.log("------- BEGIN USER DATA LIST -------");
    if (theme) console.log("Theme: " + theme);
    if (devTools) console.log("DevTools: " + devTools);
    console.log("------- END USER DATA LIST -------");
    console.log("[API] Fetched userStore Data");

    if (devTools === "true") {
        devToolsToggle.checked = true;
    } else {
        devToolsToggle.checked = false;
    }

    /**
     * Themes API initialization
     * 
     */
    await themeAPI.handler();


    /**
     * DevTools
     * 
     */
    devToolsToggle.onchange = (): void => {
        if (devToolsToggle.checked) {
            localStorage.setItem("devToolsStartup", "true");
            console.log("[API] DevTools on Startup enabled");
        } else {
            localStorage.setItem("devToolsStartup", "false");
            console.log("[API] DevTools on Startup disabled");
        }
    };
}
