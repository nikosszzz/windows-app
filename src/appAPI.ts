import { contextBridge, ipcRenderer } from "electron";

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
            const validChannels = ["updateTheme"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        status: (channel, func) => {
            const validChannels = ["themeStatus"];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    },
    settings: {
        requestData: (channel, data) => {
            const validChannels = ["userStoreReq"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        fetch: (channel, func) => {
            const validChannels = ["userData"];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        },
        unmount: () => {
            console.log("[API] Unmounting Settings API");
            const channels = ["userData", "userStoreReq", "themeStatus", "updateTheme"];
            for (const events in channels) {
                ipcRenderer.removeAllListeners(channels[events]);

            }
        }
    },
});

/**
 * Themes API
 * 
 */
contextBridge.exposeInMainWorld("themeControl", {
    setLight: () => ipcRenderer.invoke("theme:setLight"),
    setDark: () => ipcRenderer.invoke("theme:setDark"),
    setSystem: () => ipcRenderer.invoke("theme:setSystem")
});

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded");
});
