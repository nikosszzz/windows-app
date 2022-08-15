import { themeAPI } from "./themeAPI";
import chalk from "chalk";


export async function settingsAPI(): Promise<void> {
    chalk.grey(console.log("[API] Settings initialized"));

    await window.api.settings.requestData("userStoreReq", "userData");
    await window.api.settings.fetch("userData", (data: any): void => {
        chalk.yellow(console.log("[API] Fetching userStore Data"));
        chalk.grey(console.log("------- BEGIN USER DATA LIST -------"));
        chalk.grey(console.log("Theme: " + data.Theme));
        chalk.grey(console.log("Window bounds: " + data.WindowBounds.Width + "x" + data.WindowBounds.Height));
        chalk.grey(console.log("------- END USER DATA LIST -------"));
        chalk.yellow(console.log("[API] Fetched userStore Data"));
    });

    /**
     * Themes API initialization
     * 
     */
    themeAPI();
}
