import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { SITE } from '../../config/site';

import './index.css';

export default () => {
    const [isBW, setIsBW] = useState(() => {
        const saved = localStorage.getItem('theme') === 'bw';
        if (saved) document.body.classList.add('theme-bw');
        return saved;
    });

    const [firstWord, secondWord] = SITE.company.nameParts;

    const toggleTheme = () => {
        setIsBW(prev => {
            const next = !prev;
            document.body.classList.toggle('theme-bw', next);
            localStorage.setItem('theme', next ? 'bw' : 'main');
            return next;
        });
    };

    return (
        <nav>
            <div className="nav-logo">
                <span className="word-first">{firstWord}</span>
                <span className="word-second">{secondWord}</span>
            </div>
            <div className="nav-items">
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/">
                    <span className="neon-text">Home</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/business">
                    <span className="neon-text">Business</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/logo">
                    <span className="neon-text">Logo</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/logo2">
                    <span className="neon-text">Second Logo</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/monopoly">
                    <span className="neon-text">Monopoly</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/useful-links">
                    <span className="neon-text">Useful Links</span>
                </NavLink>
            </div>
            <button className="theme-toggle" onClick={toggleTheme}>
                {isBW ? 'Color' : 'B&W'}
            </button>
        </nav>
    );
}
