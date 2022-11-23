// NextJS
import type { AppProps } from "next/app";
import { Inter } from '@next/font/google'

// Styles
import "../styles/styles.css";
import { themeAPI } from "../API/themeAPI";
import NavBar from "../components/Navbar";

const inter = Inter({ style: "normal" });

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    themeAPI.init();
    return (
        <>
            <div className={inter.className}>
                <NavBar />
                <Component  {...pageProps} />
            </div>
        </>
    );
}
