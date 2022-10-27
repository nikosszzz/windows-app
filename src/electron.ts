import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";
import { constants } from "./common/constants";
import url from "url";
import path from "path";
import Store from "electron-store";
import isDev from "electron-is-dev";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("v8-compile-cache-lib").install({ cacheDir: "./cache" });

/**
 * Initialize userStore
 * 
 */
const userStore = new Store({
    defaults: {
        themeSet: "system",
        devTools: false,
        windowBounds: { width: 800, height: 600 }
    }
});

/**
 * App initalization
 * 
 */
app.on("ready", (): void => {
    let window!: BrowserWindow | null;
    /**
     * Fetch user data
     */
    const devToolsStartup = userStore.get("devTools");
    const storeTheme = userStore.get("themeSet");
    const { width, height } = userStore.get("windowBounds");
    //@ts-ignore
    nativeTheme.themeSource = storeTheme;

    window = new BrowserWindow({
        autoHideMenuBar: true,
        show: false,
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, "./appAPI.js")
        }
    });
    console.log("[App]      Window initializing");
    console.log("[App]      Version: " + constants.versions.version);

    window.loadURL(
        isDev
            ? "http://localhost:3000"
            : url.format({
                pathname: path.join(__dirname, "index.html"),
                protocol: "file:",
                slashes: true
            })
    );
    /**
     * Open Chrome DevTools when window is ready.
     *
     */
    window.once("ready-to-show", (): void => {
        window?.show();
        if (devToolsStartup === true) {
            window?.webContents.openDevTools();
            console.warn("[App]      DevTools enabled. Use the Electron DevTools ONLY if you need to necessarily.");
        }
        console.log("[App]      Window loaded");
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
    window.on("resize", (): void => {
        if (window) {
            const { width, height } = window.getBounds();
            userStore.set("windowBounds", { width, height });
        }
    });

    /**
     * Theme controls.
     *
     */
    ipcMain.on("updateTheme", (event): void => {
        event.reply("themeStatus", userStore.get("themeSet"));
    });

    ipcMain.handle("theme:setLight", (): boolean => {
        if (nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === "system") {
            nativeTheme.themeSource = "light";
            userStore.set("themeSet", nativeTheme.themeSource);
        }
        return !nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle("theme:setDark", (): boolean => {
        if (!nativeTheme.shouldUseDarkColors || nativeTheme.themeSource === "system") {
            nativeTheme.themeSource = "dark";
            userStore.set("themeSet", nativeTheme.themeSource);
        }
        return nativeTheme.shouldUseDarkColors;
    });

    ipcMain.handle("theme:setSystem", (): void => {
        nativeTheme.themeSource = "system";
        userStore.set("themeSet", nativeTheme.themeSource);
    });

    /**
     * Settings API reqs.
     *
     */
    ipcMain.on("userStoreReq", (event): void => {
        const { width, height } = userStore.get("windowBounds");
        const theme = userStore.get("themeSet");
        const devTools = userStore.get("devTools");

        const data = {
            Theme: theme,
            DevTools: devTools,
            WindowBounds: {
                Width: width,
                Height: height
            }
        };

        event.reply("userData", data);
    });
    ipcMain.on("update", (event, data): void => {
        userStore.set(data.setting as string, data.value as boolean);
        event.reply("done!");
    });
    ipcMain.on("storeRequest", (event, key: string): void => {
        event.reply("storeSetting", userStore.get(key));
    });
});
