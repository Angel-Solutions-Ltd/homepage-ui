import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

import MainLogo from "../MainLogo";
import Layout from "../Layout";
import MonopolyGame from "../MonopolyGame";
import Home from "../Home";
import SecondLogo from "../SecondLogo";
import BusinessCard from "../BusinessCard";
import UsefulLinks from "../UsefulLinks";

export default () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} /> {/* Default route */}
                    <Route path="business" element={<BusinessCard />} />
                    <Route path="logo" element={<MainLogo />} />
                    <Route path="logo2" element={<SecondLogo />} />
                    <Route path="monopoly" element={<MonopolyGame />} />
                    <Route path="useful-links" element={<UsefulLinks />} />
                </Route>
            </Routes>
        </Router>
    );
}