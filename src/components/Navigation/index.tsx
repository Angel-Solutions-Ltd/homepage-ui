import React from 'react';
import {NavLink} from "react-router-dom";

import './index.css';

interface P {

}

export default ({}: P) => {
    return (
        <nav>
            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/home">
                <button className={`neon-text`}>Home</button>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/logo">
                <button className={`neon-text`}>Logo</button>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/monopoly">
                <button className={`neon-text`}>Monopoly</button>
            </NavLink>
        </nav>
    );
}