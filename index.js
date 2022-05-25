const
    { app, BrowserWindow, ipcMain, nativeTheme } = require('electron'),
    path = require('path');

function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    window.loadFile('index.html');

    /**
     * Theme controls.
     * 
     */

    ipcMain.handle('theme:setLight', () => {
        if (nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === 'system') {
            nativeTheme.themeSource = 'light';
        }
        return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle('theme:setDark', () => {
        if (!nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === 'system') {
            nativeTheme.themeSource = 'dark';
        }
        return nativeTheme.shouldUseDarkColors
    })

    ipcMain.handle('theme:setSystem', () => {
        nativeTheme.themeSource = 'system';
    })

    /**
     * Opens Chrome DevTools on window initialization.
     * 
     */
    //win.webContents.openDevTools();
}

/**
 * Initialize window
 * 
 */

app.whenReady().then(() => {
    nativeTheme.themeSource = 'system';
    createWindow();
    console.log(`window has been initialized`);


    /**
     * macOS window handling.
     * 
     */
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

/**
 *  All OSes quit the applications once windows are closed,
 *  except macOS so implement the following function.
 * 
 */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})