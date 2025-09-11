import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './index.css';
import Navigation from "../Navigation";

interface P {}

export default ({}: P) => {
    const location = useLocation();

    const routesWithNav = ['/', '/logo', '/logo2', '/monopoly'];

    return (
        <div className={`hub non-selectable`}>
            {routesWithNav.includes(location.pathname) && <Navigation />}
            <Outlet />
        </div>
    );
};