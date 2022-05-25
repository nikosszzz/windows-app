const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('themeControl', {
    setLight: () => ipcRenderer.invoke('theme:setLight'),
    setDark: () => ipcRenderer.invoke('theme:setDark'),
    setSystem: () => ipcRenderer.invoke('theme:setSystem'),
})

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text;
    }
    
    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
})