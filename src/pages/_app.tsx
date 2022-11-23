// NextJS
import type { AppProps } from "next/app";
import { Inter } from '@next/font/google'
import NavBar from "../components/Navbar";

// Styles
import "../styles/styles.css";
import { themeAPI } from "../API/themeAPI";
const inter = Inter({ style: "normal", subsets: ["latin"], display: "swap" });

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    //App theme on initialisation
    themeAPI.init();
    return (
        <>
            <div className={inter.className}>
                <NavBar />
                <Component {...pageProps} />
            </div>
        </>
    );
}
