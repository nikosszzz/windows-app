/**
 * Theme button controls.
 * 
 */
const themeValue = document.querySelector('#theme') as HTMLInputElement;

console.log(`a`)

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

function updateTheme() {
    window.api.theme.update("updateTheme", "themeData");
    console.log(`a`)
}

window.api.theme.update("updateTheme", "themeData");
window.api.theme.status("themeStatus", (themeData: string) => {
    themeValue.value = themeData;
})

export {};