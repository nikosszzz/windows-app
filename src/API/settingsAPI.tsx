import { themeAPI } from "./themeAPI";
import chalk from "chalk";

export async function settingsAPI(): Promise<void> {
    chalk.grey(console.log("[API] Settings initialized"));

    // devtools toggle
    const devToolsToggle = document.querySelector("#devtools-toggle") as HTMLInputElement;

    await window.api.settings.requestData("userStoreReq", "userData");
    await window.api.settings.fetch("userData", (data: { Theme: string, DevTools: boolean, WindowBounds: { Width: string, Height: string } }): void => {
        chalk.yellow(console.log("[API] Fetching userStore Data"));
        chalk.grey(console.log("------- BEGIN USER DATA LIST -------"));
        chalk.grey(console.log("Theme: " + data.Theme));
        chalk.grey(console.log("DevTools: " + data.DevTools));
        chalk.grey(console.log("Window bounds: " + data.WindowBounds.Width + "x" + data.WindowBounds.Height));
        chalk.grey(console.log("------- END USER DATA LIST -------"));
        chalk.yellow(console.log("[API] Fetched userStore Data"));
      
        if (data.DevTools === true) {
            devToolsToggle.checked = true;
        } else {
            devToolsToggle.checked = false;
        }
    });

    /**
     * Themes API initialization
     * 
     */
    themeAPI();


    /**
     * DevTools
     * 
     */
    devToolsToggle.onchange = async (): Promise<void> => {
        if (devToolsToggle.checked) {
            const data = {
                setting: "devTools",
                value: true
            };
            await window.api.settings.update("update", data);
            console.log("[API] DevTools on Startup enabled");
        } else {
            const data = {
                setting: "devTools",
                value: false
            };
            await window.api.settings.update("update", data);
            console.log("[API] DevTools on Startup disabled");
        }
    };
}
