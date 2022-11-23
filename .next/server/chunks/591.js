"use strict";
exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ themeAPI)
/* harmony export */ });
/**
 * @name Theme button controls.
 * 
 */ class themeAPI {
    /**
     * @name Themes Initialiser
     * @description Handles the app init theme loading
     * 
     */ static async init() {
        if (true) {
            if (localStorage.getItem("theme") == undefined) {
                const isDefaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                localStorage.setItem("theme", isDefaultDark ? "dark" : "light");
                document.documentElement.className = "theme-" + localStorage.getItem("theme");
            } else {
                console.log(localStorage.getItem("theme"));
                if (localStorage.getItem("theme") === "system") {
                    document.documentElement.className = "theme-" + await (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4962))).appWindow.theme();
                } else {
                    document.documentElement.className = "theme-" + localStorage.getItem("theme");
                }
            }
        }
    }
    /**
     * @name Themes Handler
     * @description Starts the Element handling for settings
     * 
     */ static async handler() {
        console.log("[API] Themes handler initialized");
        const themeValue = document.querySelector("#themeOptions");
        const rootTheme = document.documentElement;
        themeValue.onchange = async ()=>{
            if (themeValue.value === "light") {
                rootTheme.className = "theme-light";
                localStorage.setItem("theme", themeValue.value);
            }
            if (themeValue.value === "dark") {
                rootTheme.className = "theme-dark";
                localStorage.setItem("theme", themeValue.value);
            }
            if (themeValue.value === "system") {
                rootTheme.className = "theme-" + await (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 4962))).appWindow.theme();
                localStorage.setItem("theme", "system");
            }
        };
    }
}


/***/ })

};
;