// React imports
import { createRoot } from "react-dom/client";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Components & Pages
const NavBar = lazy(() => import("./components/Navbar"));
const Main = lazy(() => import("./menus/main"));
const Applications = lazy(() => import("./menus/applications"));
const Optimizations = lazy(() => import("./menus/optimizations"));
const Settings = lazy(() => import("./menus/settings"));

// Styles
import "./styles/styles.css";
import { themeAPI } from "./API/themeAPI";
import { invoke } from "@tauri-apps/api";
themeAPI.init();

const container = document.querySelector("#root") as Element;
const root = createRoot(container);

root.render(
    <MemoryRouter>
        <NavBar />
        <Suspense>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/optimizations" element={<Optimizations />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Suspense>
    </MemoryRouter>
);

if (localStorage.getItem("devToolsStartup") === "true") {
    invoke("openDevTools");
}
