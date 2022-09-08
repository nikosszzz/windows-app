import { versions } from "process";

declare global {
    interface Window {
        api: any;
        themeControl: any;
    }
}

global.utils = {
    get version(): string {
        try {
            return "1.1.0";
        } catch (err) {
            return null;
        }
    },
    get electronversion(): string {
        try {
            return versions.electron;
        } catch (err) {
            return null;
        }
    } 
};

export default global;
