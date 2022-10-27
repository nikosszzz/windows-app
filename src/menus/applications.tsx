import React from "react";

export default class Applications extends React.PureComponent {
    render(): JSX.Element {
        return (
            <React.Fragment>
                <main>
                    <div id="introduction" className="page-introduction">
                        <span className="page-title"> Applications </span>
                        <span className="page-subtitle"> Install your needed apps in one page! </span>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
