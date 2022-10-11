import * as React from "react";

export default class Applications extends React.Component {
    render(): JSX.Element {
        return (
            <div className="page">
                <main>
                    <div id="introduction" className="page-introduction">
                        <span className="page-title"> Applications </span>
                        <span className="page-subtitle"> Install your needed apps in one page! </span>
                    </div>
                </main>
            </div>
        );
    }
}
