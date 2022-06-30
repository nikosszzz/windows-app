import { contextBridge, ipcRenderer } from 'electron';
import { autoUpdater } from 'electron-updater';

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
    },
    settings: {
        requestData: (channel, data) => {
            let validChannels = ["userStoreReq"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        fetch: (channel, func) => {
            let validChannels = ["userData"];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args))
            }
        },
        unmount: () => {
            console.log(`[API] Unmounting Settings API`)
            const channels = ["userData", "userStoreReq", "themeStatus", "updateTheme"];
            for (var events in channels) {
                ipcRenderer.removeAllListeners(channels[events]);

            }
        }
    },
    updater: {
        init: async (updateButton, updateDescription) => {
            console.log(`[API] Initializing Updater API`);
            updateButton.onclick = async (): Promise<void> => {
                ipcRenderer.send('checkUpdate')
                autoUpdater.on('checking-for-update', () => {
                    updateButton.innerHTML = "Checking...";
                });
                autoUpdater.on('update-not-available', () => {
                    updateButton.innerHTML = "Up to date!";
                    setInterval(() => {
                        changeDefaults();
                    }, 3000);
                });
                autoUpdater.on('update-not-available', () => {
                    updateButton.innerHTML = "Error!";
                    updateDescription.innerHTML = "An error has occured while checking/installing updates.";
                    setInterval(() => {
                        changeDefaults();
                    }, 3000);
                });
                autoUpdater.on('update-available', () => {
                    updateButton.innerHTML = "Downloading...";
                    updateDescription.innerHTML = "An update has been found!";
                });
                autoUpdater.on('update-downloaded', (releaseName) => {
                    updateButton.innerHTML = "Install";
                    updateDescription.innerHTML = "Update version: " + releaseName;
                });
            }
            function changeDefaults(): void {
                updateButton.innerHTML = 'Check';
                updateDescription.innerHTML = 'Check for any new updates to the app!';
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
    function replaceText(selector: string, text: string) {
        const element = document.querySelector(`#${selector}`) as HTMLElement;
        if (element) element.innerText = text;
    }
})

function data(arg0: string, data: any) {
    throw new Error('Function not implemented.');
}
