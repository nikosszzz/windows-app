/**
 * Theme button controls.
 * 
 */

const systemBox = document.getElementById('toggle-system');
const lightBox = document.getElementById('toggle-light');
const darkBox = document.getElementById('toggle-dark');

lightBox.addEventListener('click', async () => {
    await window.themeControl.setLight();
    darkBox.disabled = false;
    darkBox.checked = false;
    systemBox.disabled = false;
    systemBox.checked = false;
    lightBox.disabled = true;
    document.getElementById('theme').innerHTML = 'Light';
})

darkBox.addEventListener('click', async () => {
    await window.themeControl.setDark();
    systemBox.disabled = false;
    systemBox.checked = false;
    lightBox.disabled = false;
    lightBox.checked = false;
    darkBox.disabled = true;
    document.getElementById('theme').innerHTML = 'Dark';
})

systemBox.addEventListener('click', async () => {
    await window.themeControl.setSystem();
    darkBox.disabled = false;
    darkBox.checked = false;
    lightBox.disabled = false;
    lightBox.checked = false;
    systemBox.disabled = true;
    document.getElementById('theme').innerHTML = 'System';
})

