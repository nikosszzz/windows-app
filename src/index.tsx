
import { createRoot } from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
import React from "react";
import NavBar from "./components/Navbar";
import Main from "./menus/main";
import Applications from "./menus/applications";
import Optimizations from "./menus/optimizations";
import Settings from "./menus/settings";
import "./styles/styles.css";


const container = document.querySelector("#root");
const root = createRoot(container as Element);

root.render(
    <HashRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/optimizations" element={<Optimizations />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    </HashRouter>
);
