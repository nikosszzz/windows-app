import { contextBridge, ipcRenderer } from 'electron';

/**
 * Requests API
 * 
 */
contextBridge.exposeInMainWorld("api", {
    send: (channel: string, data: string) => {
        ipcRenderer.send(channel, data);
    },
    receive: (channel: string, func: any) => {
        // Deliberately strip event as it includes `sender` 
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    theme: {
        update: (channel: string, data: string) => {
            let validChannels = ["updateTheme"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        status: (channel: string, func: any) => {
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
    async function replaceText(selector: any, text: string) {
        const element = document.querySelector(`#${selector}`) as HTMLElement;
        if (element) element.innerText = text;
    }
})