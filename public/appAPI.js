const { contextBridge, ipcRenderer } = require('electron');

/**
 * Requests API
 * 
 */
contextBridge.exposeInMainWorld("api", {
    send: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    receive: (channel, func) => {
        // Deliberately strip event as it includes `sender` 
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    theme: {
        update: (channel, data) => {
            let validChannels = ["updateTheme"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        status: (channel, func) => {
            let validChannels = ["themeStatus"];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
})

/**
 * Themes API
 * 
 */
contextBridge.exposeInMainWorld('themeControl', {
    setLight: () => ipcRenderer.invoke('theme:setLight'),
    setDark: () => ipcRenderer.invoke('theme:setDark'),
    setSystem: () => ipcRenderer.invoke('theme:setSystem')
})

window.addEventListener('DOMContentLoaded', () => {
    replaceText = (selector, text) => {
        const element = document.querySelector(`#${selector}`);
        if (element) element.innerText = text;
    }
})