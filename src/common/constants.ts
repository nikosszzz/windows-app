import React from "react";

export class constants {
    static get version(): string | null {
        try {
            return "1.1.0";
        } catch (err) {
            return null;
        }
    }
    static get reactversion(): string | null {
        try {
            return React.version;
        } catch (err) {
            return null;
        }
    }
}
