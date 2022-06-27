/**
 * Theme button controls.
 * 
 */
export async function themeAPI(): Promise<void> {
    const themeValue = document.querySelector('#theme') as HTMLInputElement;

    themeValue.addEventListener('change', async () => {
        if (themeValue.value === 'light') {
            await window.themeControl.setLight();
            updateTheme();
        }
        if (themeValue.value === 'dark') {
            await window.themeControl.setDark();
            updateTheme();
        }
        if (themeValue.value === 'system') {
            await window.themeControl.setSystem();
            updateTheme();
        }
    })

    window.api.theme.update("updateTheme", "themeData");
    window.api.theme.status("themeStatus", (themeData) => {
        themeValue.value = themeData;
    })

    function updateTheme() {
        window.api.theme.update("updateTheme", "themeData");
    }

    function stop(): void {
        return;
    }
}