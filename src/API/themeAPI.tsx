/**
 * Theme button controls.
 * 
 */
export async function themeAPI(): Promise<void> {
    console.log("[API] Themes initialized");
    const themeValue = document.querySelector("#theme") as HTMLInputElement;

    themeValue.onchange = async (): Promise<void> => {
        if (themeValue.value === "light") {
            await window.themeControl.setLight();
            updateTheme();
        }
        if (themeValue.value === "dark") {
            await window.themeControl.setDark();
            updateTheme();
        }
        if (themeValue.value === "system") {
            await window.themeControl.setSystem();
            updateTheme();
        }
    };

    async function updateTheme(): Promise<void> {
        await window.api.theme.update("updateTheme", "themeData");
        window.api.theme.status("themeStatus", (themeData: string) => {
            themeValue.value = themeData;
        });
    }

    updateTheme();
}
