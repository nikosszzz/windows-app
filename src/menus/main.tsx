import React from "react";
import localforage from "localforage";

export default class Main extends React.PureComponent {
    async componentDidMount(): Promise<void> {
        if (await localforage.getItem("theme") == String) {
            window.theme = (localforage.getItem("theme") as any);
        } else {
            if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
                window.theme = "dark";
            } else {
                window.theme = "light";
            }
        }
    }
    render(): JSX.Element {
        return (
            <React.Fragment>
                <main>
                    <div id="introduction" className="card">
                        <div className="card-content">
                            <h1> ✨ Windows Utilities ✨ </h1>
                            <h3>
                Welcome to the Windows Utilities app! In this app,
                there will be shortcuts to download programs you might need after you install/reinstall your windows
                installation!
                This is purely made to make re-install Windows with more ease.
                            </h3>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
