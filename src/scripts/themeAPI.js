/**
 * Theme button controls.
 * 
 */
export async function themeAPI() {
    console.log(`test`)
    const themeValue = document.querySelector('#theme');

    themeValue.addEventListener('change', async () => {
        console.log(`test`)
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
        console.log(`a`)
    }
}

themeAPI();