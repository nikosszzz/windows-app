/**
 * Theme button controls.
 * 
 */
const systemBox = document.querySelector('#toggle-system');
const lightBox = document.querySelector('#toggle-light');
const darkBox = document.querySelector('#toggle-dark');
const themeValue = document.querySelector('#theme');

lightBox.addEventListener('click', async () => {
    await window.themeControl.setLight();
    updateTheme();
})

darkBox.addEventListener('click', async () => {
    await window.themeControl.setDark();
    updateTheme();
})

systemBox.addEventListener('click', async () => {
    await window.themeControl.setSystem();
    updateTheme();
})

/**
 * Theme API Controls.
 * 
 * 
 */
function updateTheme() {
    window.api.theme.update("updateTheme", "themeData");
}

window.api.theme.status("themeStatus", (themeData) => {

    if (themeData === 'light') {
        var userTheme = 'Light';
        darkBox.disabled = false;
        darkBox.checked = false;
        systemBox.disabled = false;
        systemBox.checked = false;
        lightBox.disabled = true;
        lightBox.checked = true;
    } else if (themeData === 'dark') {
        var userTheme = 'Dark';
        systemBox.disabled = false;
        systemBox.checked = false;
        lightBox.disabled = false;
        lightBox.checked = false;
        darkBox.disabled = true;
        darkBox.checked = true;
    } else if (themeData === 'system') {
        var userTheme = 'System';
        darkBox.disabled = false;
        darkBox.checked = false;
        lightBox.disabled = false;
        lightBox.checked = false;
        systemBox.disabled = true;
        systemBox.checked = true;
    }

    themeValue.innerHTML = userTheme;
});