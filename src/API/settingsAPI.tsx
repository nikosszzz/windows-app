import chalk from "chalk";
import { themeAPI } from "./themeAPI";

export async function settingsAPI(): Promise<void> {
    chalk.grey(console.log(`[API] Settings initialized`));

    await window.api.settings.requestData("userStoreReq", "userData");
    await window.api.settings.fetch("userData", (theme: string, windowBounds: any) => {
        chalk.yellow(console.log(`Fetching userStore Data`));
        chalk.grey(console.log(`------- BEGIN USER DATA LIST -------`));
        chalk.grey(console.log(`Theme: ` + theme));
        chalk.grey(console.log(`Window bounds: ` + windowBounds));
        chalk.grey(console.log(`------- END USER DATA LIST -------`));
        chalk.yellow(console.log(`Done fetching userStore Data`))
    });

    /**
     * Themes API initialization
     * 
     */
    themeAPI();
}
