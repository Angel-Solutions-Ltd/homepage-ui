import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './index.css';
import Navigation from "../Navigation";

const ROUTES_WITH_NAV = ['/', '/business', '/logo', '/logo2', '/monopoly', '/useful-links'];

interface P {}

export default ({}: P) => {
    const location = useLocation();

    return (
        <div className={`hub`}>
            {ROUTES_WITH_NAV.includes(location.pathname) && <Navigation />}
            <Outlet />
        </div>
    );
};
