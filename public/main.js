const
    { app, BrowserWindow, ipcMain, nativeTheme } = require('electron'),
    path = require('path'),
    url = require('url'),
    Store = require('electron-store'),
    isDev = require('electron-is-dev');

require('v8-compile-cache-lib').install({ cacheDir: path.join(__dirname, './cache') });
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
 * App initalization
 * 
 */
app.on('ready', () => {
    let window;
    /**
     * Fetch user data
     */
    let storeTheme = userStore.get('themeSet');
    let { width, height } = userStore.get('windowBounds');
    nativeTheme.themeSource = storeTheme;

    window = new BrowserWindow({
        autoHideMenuBar: true,
        show: false,
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, './appAPI.js')
        }
    });
    console.log(`[App] Window initializing`);

    window.loadURL(
        isDev
            ? 'http://localhost:3000'
            : url.format({
                pathname: path.join(__dirname, 'index.html'),
                protocol: 'file:',
                slashes: true
            })
    );
    /**
     * Open Chrome DevTools when window is ready.
     *
     */
    window.once('ready-to-show', () => {
        window.show();
        window.webContents.openDevTools();
        console.log(`[App] Window loaded`)
    });

    /**
     * Nullify the window object on close.
     *
     */
    window.on("closed", () => {
        window = null;
    });

    /**
     * Change window dimensions in userStore on resize.
     *
     */
    window.on('resize', () => {
        let { width, height } = window.getBounds();
        userStore.set('windowBounds', { width, height });
    });

    /**
     * Theme controls.
     *
     */
    ipcMain.on('updateTheme', (event) => {
        event.reply('themeStatus', userStore.get('themeSet'));
    });

    ipcMain.handle('theme:setLight', () => {
        if (nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === 'system') {
            nativeTheme.themeSource = 'light';
            userStore.set('themeSet', nativeTheme.themeSource);
        }
        return nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle('theme:setDark', () => {
        if (!nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === 'system') {
            nativeTheme.themeSource = 'dark';
            userStore.set('themeSet', nativeTheme.themeSource);
        }
        return nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle('theme:setSystem', () => {
        nativeTheme.themeSource = 'system';
        userStore.set('themeSet', nativeTheme.themeSource);
    });

    /**
     * Settings API reqs.
     *
     */
    ipcMain.on('userStoreReq', (event) => {
        const windowBounds = width + `x` + height;
        event.reply('userData', userStore.get('themeSet'), windowBounds);
    });
})