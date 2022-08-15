import React from "react";

export default class Main extends React.Component {
    render(): JSX.Element {
        return (
            <div className="page">
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
            </div>
        );
    }
}
