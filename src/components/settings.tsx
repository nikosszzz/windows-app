import React from "react";
import { settingsAPI } from "../API/settingsAPI";
import { Link } from "react-router-dom";

export default class Settings extends React.Component {
    componentDidMount(): void {
        settingsAPI();
    }
    componentWillUnmount(): void {
        window.api.settings.unmount();
    }
    render(): JSX.Element {
        return (
            <div className="page">
                <nav className="sidebar">
                    <ul className="sidebar-list">
                        <li id="logo" className="sidebar-logo">
                            <span className="logo-text">Windows Utilities</span>
                            <span id="logo-badge" className="badge">Beta</span>
                        </li>

                        <li className="sidebar-item">
                            <Link to='/' className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path className="link-logo"
                                        d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
                                </svg>
                                <span className="link-text">Home</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link to='/applications' className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path className="link-logo"
                                        d="M50.73 58.53C58.86 42.27 75.48 32 93.67 32H208V160H0L50.73 58.53zM240 160V32H354.3C372.5 32 389.1 42.27 397.3 58.53L448 160H240zM448 416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V192H448V416z" />
                                </svg>
                                <span className="link-text">Applications</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link to='/optimizations' className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                    <path className="link-logo"
                                        d="M248.8 4.994C249.9 1.99 252.8 .0001 256 .0001C259.2 .0001 262.1 1.99 263.2 4.994L277.3 42.67L315 56.79C318 57.92 320 60.79 320 64C320 67.21 318 70.08 315 71.21L277.3 85.33L263.2 123C262.1 126 259.2 128 256 128C252.8 128 249.9 126 248.8 123L234.7 85.33L196.1 71.21C193.1 70.08 192 67.21 192 64C192 60.79 193.1 57.92 196.1 56.79L234.7 42.67L248.8 4.994zM427.4 14.06C446.2-4.686 476.6-4.686 495.3 14.06L529.9 48.64C548.6 67.38 548.6 97.78 529.9 116.5L148.5 497.9C129.8 516.6 99.38 516.6 80.64 497.9L46.06 463.3C27.31 444.6 27.31 414.2 46.06 395.4L427.4 14.06zM461.4 59.31L356.3 164.3L379.6 187.6L484.6 82.58L461.4 59.31zM7.491 117.2L64 96L85.19 39.49C86.88 34.98 91.19 32 96 32C100.8 32 105.1 34.98 106.8 39.49L128 96L184.5 117.2C189 118.9 192 123.2 192 128C192 132.8 189 137.1 184.5 138.8L128 160L106.8 216.5C105.1 221 100.8 224 96 224C91.19 224 86.88 221 85.19 216.5L64 160L7.491 138.8C2.985 137.1 0 132.8 0 128C0 123.2 2.985 118.9 7.491 117.2zM359.5 373.2L416 352L437.2 295.5C438.9 290.1 443.2 288 448 288C452.8 288 457.1 290.1 458.8 295.5L480 352L536.5 373.2C541 374.9 544 379.2 544 384C544 388.8 541 393.1 536.5 394.8L480 416L458.8 472.5C457.1 477 452.8 480 448 480C443.2 480 438.9 477 437.2 472.5L416 416L359.5 394.8C354.1 393.1 352 388.8 352 384C352 379.2 354.1 374.9 359.5 373.2z" />
                                </svg>
                                <span className="link-text">Optimizations</span>
                            </Link>
                        </li>

                        <li className="sidebar-item">
                            <Link to='/settings' className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path className="link-logo"
                                        d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z" />
                                </svg>
                                <span className="link-text">Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

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

                    <div id="button" className="card">
                        <svg className="card-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M144 480C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 103.6 167.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 422.7 582.7 480 512 480H144zM303 392.1C312.4 402.3 327.6 402.3 336.1 392.1L416.1 312.1C426.3 303.6 426.3 288.4 416.1 279C407.6 269.7 392.4 269.7 383 279L344 318.1V184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184V318.1L256.1 279C247.6 269.7 232.4 269.7 223 279C213.7 288.4 213.7 303.6 223 312.1L303 392.1z" />
                        </svg>

                        <div className="card-desc">
                            <span className="card-title"> Update </span>
                            <span className="card-subtitle" id="updateInfo"> Check for any new updates to the app! </span>
                        </div>

                        <button className="card-button" id="updateBtn"> Check </button>
                    </div>

                    <div className="card">
                        <span id="card-title" className="badge">Beta</span>
                        <span className="card-subtitle">&nbsp; The app is unstable and might have bugs and/or crashes!</span>
                    </div>
                </main>
            </div>
        );
    }
}
