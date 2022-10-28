// React imports
import { createRoot } from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// Components & Pages
const NavBar = lazy(() => import("./components/Navbar"));
const Main = lazy(() => import("./menus/main"));
const Applications = lazy(() => import("./menus/applications"));
const Optimizations = lazy(() => import("./menus/optimizations"));
const Settings = lazy(() => import("./menus/settings"));

// Styles
import "./styles/styles.css";


const container = document.querySelector("#root") as Element;
const root = createRoot(container);


root.render(
    <HashRouter>
        <NavBar />
        <Suspense>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/optimizations" element={<Optimizations />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Suspense>
    </HashRouter>
);
