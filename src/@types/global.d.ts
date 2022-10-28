declare global {
    interface Window {
        /**
         * @name api
         * @description IPC api
         * 
         */
        api: {
            send: (channel: string, data: any) => void;
            receive: (channel: string, func: any) => void;
            theme: {
                update: (channel: string, data: any) => void;
                status: (channel: string, func: any) => void;
            }
            settings: {
                update: (channel: string, data: any) => void;
                requestData: (channel: string, data: any) => void;
                fetch: (channel: string, func: any) => void;
                unmount: () => void
            }
        }
        /***
         * @name themeControl
         * @name Theme Control api
         * 
         */
        themeControl: {
            setLight: () => Promise<any>
            setDark: () => Promise<any>
            setSystem: () => Promise<any>
        },
    }
}

export { };
