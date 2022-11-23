import { version } from "react";

export const versions = {
    get appVersion(): string | null {
        try {
            return "1.1.0";
        } catch {
            return null;
        }
    },
    get reactversion(): string | null {
        try {
            return version;
        } catch {
            return null;
        }
    },
    get nextversion(): string | null {
        try {
            return "13";
        } catch {
            return null;
        }
    }
};
