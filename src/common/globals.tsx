import * as React from "react";

declare global {
    interface Window {
        api: any;
        themeControl: any;
    }
}

global.constants = {
    get version(): string {
        try {
            return "1.1.0";
        } catch (err) {
            return null;
        }
    },
    get reactversion(): string {
        try{
            return React.version;
        } catch (err) {
            return null;
        }
    }
};

export default global;
