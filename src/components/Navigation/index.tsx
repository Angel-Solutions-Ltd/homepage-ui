import React from 'react';
import {NavLink} from "react-router-dom";

import './index.css';

interface P {

}

export default ({}: P) => {
    return (
        <nav>
            <div className="nav-items">
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/">
                    <span className={`neon-text`}>Home</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/business">
                    <span className={`neon-text`}>Business</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/logo">
                    <span className={`neon-text`}>Logo</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/logo2">
                    <span className={`neon-text`}>Second Logo</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/monopoly">
                    <span className={`neon-text`}>Monopoly</span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/useful-links">
                    <span className={`neon-text`}>Useful Links</span>
                </NavLink>
            </div>
        </nav>
    );
}
