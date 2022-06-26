const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const path = require('path');
const Store = require('electron-store');

require('v8-compile-cache');

/**
 * Initialize userStore
 * 
 */
const userStore = new Store({
    configName: 'userStore',
    defaults: {
        themeSet: 'system',
        windowBounds: { width: 800, height: 600 }
    }
});

/**
 * Create & initialize window
 * 
 */

app.on('ready', function () {
    let window;
    /**
     * Fetch userStore
     */
    let storeTheme = userStore.get('themeSet');
    let { width, height } = userStore.get('windowBounds')

    nativeTheme.themeSource = storeTheme;

    window = new BrowserWindow({
        autoHideMenuBar: true,
        width: width,
        height: height,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './appAPI.js')
        }
    })
    exports.userStore = userStore;
    console.log(`window has been initialized`);

    const startURL = 'http://localhost:3000';

    window.loadURL(startURL);
    window.once('ready-to-show', () => window.show());

    /**
     * Open Chrome DevTools on window initialization.
     * 
     */
    window.webContents.openDevTools();

    /**
     * Nullify the window object on close.
     * 
     */
    window.on("closed", () => {
        window = null;
    })

    /**
     * Change window dimensions in userStore on resize.
     * 
     */
    window.on('resize', () => {
        let { width, height } = window.getBounds();
        userStore.set('windowBounds', { width, height })
    })

    /**
     * Theme controls.
     * 
     */
    ipcMain.on('updateTheme', (event, data) => {
        event.reply('themeStatus', userStore.get('themeSet'));
    })

    ipcMain.handle('theme:setLight', () => {
        if (nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === 'system') {
            nativeTheme.themeSource = 'light';
            userStore.set('themeSet', nativeTheme.themeSource);
        }
        return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle('theme:setDark', () => {
        if (!nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === 'system') {
            nativeTheme.themeSource = 'dark';
            userStore.set('themeSet', nativeTheme.themeSource);
        }
        return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle('theme:setSystem', () => {
        nativeTheme.themeSource = 'system';
        userStore.set('themeSet', nativeTheme.themeSource);
    })
})