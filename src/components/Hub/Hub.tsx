import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout';
import { MonopolyGame } from '../MonopolyGame';
import { Home } from '../Home';
import { BusinessCard } from '../BusinessCard';
import { Misc } from '../Misc';
import { Services } from '../Services';
import { Work } from '../Work';
import { FAQ } from '../FAQ';
import './Hub.css';

export const Hub = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="services"  element={<Services />} />
                    <Route path="work"      element={<Work />} />
                    <Route path="faq"       element={<FAQ />} />
                    <Route path="contact"   element={<BusinessCard />} />
                    <Route path="misc"      element={<Misc />} />
                    <Route path="monopoly"  element={<MonopolyGame />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default Hub;
