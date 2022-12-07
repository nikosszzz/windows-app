import { saveAs } from "file-saver";

export default function ProgramCard(app: { version: string, download_url: string, app_name: string, app_desc: string, app_image: string }) {
    return (
        <div id="theme-card" className="card">
            <div className="card-info">
                <svg className="card-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
                    <image xlinkHref={app.app_image} />
                </svg>

                <div className="card-desc">
                    <span className="card-title"> {app.app_name} ({app.version})</span>
                    <span className="card-subtitle"> {app.app_desc} </span>
                </div>

                <div className="card-input">
                    <button className="card-button" onClick={() => { saveAs(app.download_url) }}> Download & Install </button>
                </div>
            </div>
        </div>
    );
}