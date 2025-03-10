import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import MainLogo from "../MainLogo";
import Layout from "../Layout";
import MonopolyGame from "../MonopolyGame";
import Home from "../Home";

export default () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> {/* Default route */}
                    <Route path="logo" element={<MainLogo />} />
                    <Route path="monopoly" element={<MonopolyGame />} />
                </Route>
            </Routes>
        </Router>
    );
}