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

        update: (channel, data) => {
            const validChannels = ["update"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        requestData: (channel, data) => {
            const validChannels = ["userStoreReq", "storeRequest"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        fetch: (channel, func) => {
            const validChannels = ["userData", "storeSetting"];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        },
        unmount: () => {
            console.log("[API] Unmounting Settings API");
            const channels = ["storeRequest", "storeSetting", "userData", "userStoreReq", "themeStatus", "updateTheme"];
            channels.forEach(event => {
                ipcRenderer.removeAllListeners(event);
            });
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
