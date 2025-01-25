import React from 'react';
import { Outlet } from 'react-router-dom';

import './index.css';
import Navigation from "../Navigation";

interface P {

}

export default ({}: P) => {
    return (
        <div className={`hub`}>
            <Navigation />
            <Outlet /> {/* This will render the matched child route component */}
        </div>
    );
}