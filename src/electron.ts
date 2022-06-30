import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron';
import url from 'url';
import path from 'path';
import Store from 'electron-store';
import isDev from 'electron-is-dev';
import { autoUpdater } from 'electron-updater';

require('v8-compile-cache-lib').install({ cacheDir: 'cache' });
/**
 * Initialize userStore
 * 
 */
const userStore = new Store({
    //@ts-ignore
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
app.on('ready', (): void => {
    let window;
    /**
     * Fetch user data
     */
    let storeTheme = userStore.get('themeSet');
    let { width, height } = userStore.get('windowBounds');
    //@ts-ignore
    nativeTheme.themeSource = storeTheme;

    autoUpdater.setFeedURL({
        provider: "github",
        owner: "nikosszzz",
        repo: "windows-app",
        private: false,
        releaseType: "release"
    })

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
    console.log(app.getVersion());

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
    window.once('ready-to-show', (): void => {
        window.show();
        window.webContents.openDevTools();
        console.log(`[App] Window loaded`);
    });

    /**
     * Nullify the window object on close.
     *
     */
    window.on("closed", (): void => {
        window = null;
    });

    /**
     * Change window dimensions in userStore on resize.
     *
     */
    window.on('resize', (): void => {
        let { width, height } = window.getBounds();
        userStore.set('windowBounds', { width, height });
    });

    /**
     * Theme controls.
     *
     */
    ipcMain.on('updateTheme', (event): void => {
        event.reply('themeStatus', userStore.get('themeSet'));
    });

    ipcMain.handle('theme:setLight', (): boolean => {
        if (nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === 'system') {
            nativeTheme.themeSource = 'light';
            userStore.set('themeSet', nativeTheme.themeSource);
        }
        return nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle('theme:setDark', (): boolean => {
        if (!nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === 'system') {
            nativeTheme.themeSource = 'dark';
            userStore.set('themeSet', nativeTheme.themeSource);
        }
        return nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle('theme:setSystem', (): void => {
        nativeTheme.themeSource = 'system';
        userStore.set('themeSet', nativeTheme.themeSource);
    });

    /**
     * Settings API reqs.
     *
     */
    ipcMain.on('userStoreReq', (event): void => {
        let { width, height } = userStore.get('windowBounds');
        let windowBounds = width + `x` + height;
        event.reply('userData', userStore.get('themeSet'), windowBounds);
    });

    ipcMain.on('checkUpdate', function (): void {
        console.log(`test`)
        autoUpdater.checkForUpdatesAndNotify();
    })
})