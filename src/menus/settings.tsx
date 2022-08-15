import React from "react";
import { settingsAPI } from "../API/settingsAPI";

export default class Settings extends React.Component {
    componentDidMount(): void {
        settingsAPI();
    }
    componentWillUnmount(): void {
        window.api.settings.unmount();
    }
    render(): JSX.Element {
        return (
            <main>
                <div id="introduction" className="page-introduction">
                    <span className="page-title"> Settings </span>
                    <span className="page-subtitle"> Settings page. </span>
                </div>

                <div id="theme-card" className="card">
                    <div className="card-info">
                        <svg className="card-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M512 255.1C512 256.9 511.1 257.8 511.1 258.7C511.6 295.2 478.4 319.1 441.9 319.1H344C317.5 319.1 296 341.5 296 368C296 371.4 296.4 374.7 297 377.9C299.2 388.1 303.5 397.1 307.9 407.8C313.9 421.6 320 435.3 320 449.8C320 481.7 298.4 510.5 266.6 511.8C263.1 511.9 259.5 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256V255.1zM96 255.1C78.33 255.1 64 270.3 64 287.1C64 305.7 78.33 319.1 96 319.1C113.7 319.1 128 305.7 128 287.1C128 270.3 113.7 255.1 96 255.1zM128 191.1C145.7 191.1 160 177.7 160 159.1C160 142.3 145.7 127.1 128 127.1C110.3 127.1 96 142.3 96 159.1C96 177.7 110.3 191.1 128 191.1zM256 63.1C238.3 63.1 224 78.33 224 95.1C224 113.7 238.3 127.1 256 127.1C273.7 127.1 288 113.7 288 95.1C288 78.33 273.7 63.1 256 63.1zM384 191.1C401.7 191.1 416 177.7 416 159.1C416 142.3 401.7 127.1 384 127.1C366.3 127.1 352 142.3 352 159.1C352 177.7 366.3 191.1 384 191.1z" />
                        </svg>

                        <div className="card-desc">
                            <span className="card-title"> Theme </span>
                            <span className="card-subtitle"> Choose from a variety (by that i mean only 2) of themes that suit your
                                taste! </span>
                        </div>
                    </div>

                    <div className="card-input">
                        <select className="card-dropdown" id="theme">
                            <option value="dark" id="toggle-dark"> Dark </option>
                            <option value="light" id="toggle-light"> Light </option>
                            <option value="system" id="toggle-system"> System </option>
                        </select>
                    </div>
                </div>

                <div id="toggle" className="card">
                    <div className="card-info">
                        <svg className="card-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M384 64C490 64 576 149.1 576 256C576 362 490 448 384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384zM384 352C437 352 480 309 480 256C480 202.1 437 160 384 160C330.1 160 288 202.1 288 256C288 309 330.1 352 384 352z" />
                        </svg>

                        <div className="card-desc">
                            <span className="card-title"> Toggle </span>
                            <span className="card-subtitle"> Toggle switch card demo </span>
                        </div>
                    </div>

                    <div className="card-input">
                        <input type="checkbox" className="card-toggle" id="toggle" />
                    </div>
                </div>

                <div id="button" className="card">
                    <div className="card-info">
                        <svg className="card-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M400 224c-9.148 0-17.62 2.697-24.89 7.143C370.9 208.9 351.5 192 328 192c-17.38 0-32.46 9.33-40.89 23.17C282.1 192.9 263.5 176 240 176c-12.35 0-23.49 4.797-32 12.46V40c0-22.09-17.9-40-39.1-40C145.9 0 128 17.91 128 40v322.7L72 288C64.15 277.5 52.13 272 39.97 272c-21.22 0-39.97 17.06-39.97 40.02c0 8.356 2.608 16.78 8.005 23.98l91.22 121.6C124.8 491.7 165.5 512 208 512h96C383.4 512 448 447.4 448 368v-96C448 245.5 426.5 224 400 224zM240 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C208 295.2 215.2 288 224 288s16 7.156 16 16V400zM304 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C272 295.2 279.2 288 288 288s16 7.156 16 16V400zM368 400c0 8.844-7.156 16-16 16s-16-7.156-16-16v-96C336 295.2 343.2 288 352 288s16 7.156 16 16V400z" />
                        </svg>

                        <div className="card-desc">
                            <span className="card-title"> Button </span>
                            <span className="card-subtitle"> Button card demo </span>
                        </div>
                    </div>

                    <div className="card-input">
                        <button className="card-button" id="button"> Button </button>
                    </div>
                </div>

                <div id="button" className="card">
                    <div className="card-info">
                        <svg className="card-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z" />
                        </svg>

                        <div className="card-desc">
                            <span className="card-title"> Dropdown </span>
                            <span className="card-subtitle"> Dropdown card demo </span>
                        </div>
                    </div>

                    <div className="card-input">
                        <button className="card-button" id="button"> It can also have buttons! </button>

                        <svg className="dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z" />
                        </svg>
                    </div>
                </div>

                <div className="card">
                    <span id="card-title" className="badge">Beta</span>
                    <span className="card-subtitle">&nbsp; The app is unstable and might have bugs and/or crashes!</span>
                </div>
            </main>
        );
    }
}
