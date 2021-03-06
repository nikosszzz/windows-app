import { themeAPI } from "./themeAPI";
import chalk from "chalk";


export async function settingsAPI(): Promise<void> {
    chalk.grey(console.log("[API] Settings initialized"));

    await window.api.settings.requestData("userStoreReq", "userData");
    await window.api.settings.fetch("userData", (theme: string, windowBounds: string): void => {
        chalk.yellow(console.log("[API] Fetching userStore Data"));
        chalk.grey(console.log("------- BEGIN USER DATA LIST -------"));
        chalk.grey(console.log("Theme: " + theme));
        chalk.grey(console.log("Window bounds: " + windowBounds));
        chalk.grey(console.log("------- END USER DATA LIST -------"));
        chalk.yellow(console.log("[API] Fetched userStore Data"));
    });

    /**
     * Themes API initialization
     * 
     */
    themeAPI();

    /**
     * Settings API initialization
     * 
     */
    const updateButton = document.querySelector("#updateBtn") as HTMLElement;
    const updateDescription = document.querySelector("#updateInfo") as HTMLElement;
    window.api.updater.init(updateButton, updateDescription)    ;
}
