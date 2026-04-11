import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import './Layout.css';

const ROUTES_WITH_NAV = ['/', '/services', '/work', '/faq', '/contact', '/misc', '/monopoly'];

interface P {}

export const Layout = ({}: P) => {
    const location = useLocation();

    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme') === 'dark';
        if (saved) document.body.classList.add('theme-dark');
        return saved;
    });

    const toggleTheme = () => {
        setIsDark(prev => {
            const next = !prev;
            document.body.classList.toggle('theme-dark', next);
            localStorage.setItem('theme', next ? 'dark' : 'light');
            return next;
        });
    };

    return (
        <div className="hub">
            {ROUTES_WITH_NAV.includes(location.pathname) && (
                <Navigation isDark={isDark} toggleTheme={toggleTheme} />
            )}
            <Outlet />
            <Footer isDark={isDark} toggleTheme={toggleTheme} />
        </div>
    );
};

export default Layout;
