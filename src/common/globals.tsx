import { versions } from "process";

global.utils = {
    version: "1.1.0",
    electronversion: versions.electron,
};

export default global;
