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
    darkBox.disabled = false;
    darkBox.checked = false;
    systemBox.disabled = false;
    systemBox.checked = false;
    lightBox.disabled = true;
    themeValue.innerHTML = 'Light';
})

darkBox.addEventListener('click', async () => {
    await window.themeControl.setDark();
    systemBox.disabled = false;
    systemBox.checked = false;
    lightBox.disabled = false;
    lightBox.checked = false;
    darkBox.disabled = true;
    themeValue.innerHTML = 'Dark';
})

systemBox.addEventListener('click', async () => {
    await window.themeControl.setSystem();
    darkBox.disabled = false;
    darkBox.checked = false;
    lightBox.disabled = false;
    lightBox.checked = false;
    systemBox.disabled = true;
    themeValue.innerHTML = 'System';
})

/**
 * Theme API Controls.
 * 
 * 
 */
window.api.send("requestTheme", "some data");

window.api.receive("requestedTheme", (data) => {

    if (data === 'light') {
        var userTheme = 'Light';
        darkBox.disabled = false;
        darkBox.checked = false;
        systemBox.disabled = false;
        systemBox.checked = false;
        lightBox.disabled = true;
        lightBox.checked = true;
    } else if (data === 'dark') {
        var userTheme = 'Dark';
        systemBox.disabled = false;
        systemBox.checked = false;
        lightBox.disabled = false;
        lightBox.checked = false;
        darkBox.disabled = true;
        darkBox.checked = true;
    } else if (data === 'system') {
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