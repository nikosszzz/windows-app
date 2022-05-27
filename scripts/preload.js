const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('themeControl', {
    setLight: () => ipcRenderer.invoke('theme:setLight'),
    setDark: () => ipcRenderer.invoke('theme:setDark'),
    setSystem: () => ipcRenderer.invoke('theme:setSystem')
})

/**
 * Application API.
 * 
 */
contextBridge.exposeInMainWorld(
    "api", {
    send: (channel, data) => {
            ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
            // Deliberately strip event as it includes `sender` 
            ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
})

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.querySelector(`#${selector}`);
        if (element) element.innerText = text;
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
})