//import { themeAPI } from "./themeAPI";
export async function settingsAPI(): Promise<void> {
    console.log("[API] Settings initialized");

    // devtools toggle
    const devToolsToggle = document.querySelector("#devtools-toggle") as HTMLInputElement;
    const theme = localStorage.getItem("theme");
    const windowBounds = localStorage.getItem("windowbounds");
    const devTools = localStorage.getItem("devtoolsStartup");

    console.log("[API] Fetching userStore Data");
    console.log("------- BEGIN USER DATA LIST -------");
    if (theme) console.log("Theme: " + theme);
    if (devTools) console.log("DevTools: " + devTools);
    if (windowBounds) console.log("Window bounds: " + (windowBounds as any).width + "x" + (windowBounds as any).height);
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
    // Check FIXME in handler
    //await themeAPI.handler();


    /**
     * DevTools
     * 
     */
    devToolsToggle.onchange = (): void => {
        if (devToolsToggle.checked) {
            const data = {
                setting: "devToolsStartup",
                value: "true"
            };
            localStorage.setItem(data.setting, data.value);
            console.log("[API] DevTools on Startup enabled");
        } else {
            const data = {
                setting: "devToolsStartup",
                value: "false"
            };
            localStorage.setItem(data.setting, data.value);
            console.log("[API] DevTools on Startup disabled");
        }
    };
}
