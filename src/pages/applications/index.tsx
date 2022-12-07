import ProgramCard from "../../components/ProgramCard";


// This needs much further work.
const appDataDummy = 
    {
        app_name: "Azurite",
        app_image: "https://tweakcentral.net/assets/img/azurite.svg",
        app_desc: "Azurite Optimizer boosts your in-game FPS, network and general computer performance in day-to-day tasks.",
        version: "1.1.7",
        download_url: "https://update.tweakcentral.net/azurite/Azurite%20Setup%201.1.7.exe",
    }


export default function Applications() {
    return (
        <main>
            <div id="introduction" className="page-introduction">
                <span className="page-title"> Applications </span>
                <span className="page-subtitle"> Install your needed apps in one page! </span>
            </div>
            <div>
                <>
                    {ProgramCard(appDataDummy)}
                </>
            </div>
        </main>
    );
}
