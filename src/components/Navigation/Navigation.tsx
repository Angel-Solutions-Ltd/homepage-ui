import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { SITE } from '../../config/site';
import { COPY } from '../../copy';
import './Navigation.css';

const NAV_LINKS = [
    { to: '/',         label: COPY.nav.home },
    { to: '/services', label: COPY.nav.services },
    { to: '/work',     label: COPY.nav.work },
    { to: '/faq',      label: COPY.nav.faq },
    { to: '/contact',  label: COPY.nav.contact },
];

interface P {
    isDark: boolean;
    toggleTheme: () => void;
}

export const Navigation = ({ isDark, toggleTheme }: P) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [firstWord, secondWord] = SITE.company.nameParts;
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!menuOpen) return;
        const handler = (e: MouseEvent | TouchEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav ref={navRef}>
            <NavLink to="/" className="nav-logo" onClick={closeMenu}>
                <span className="word-first">{firstWord}</span>
                <span className="word-second">{secondWord}</span>
            </NavLink>

            {/* Desktop */}
            <div className="nav-items">
                {NAV_LINKS.map(({ to, label }) => (
                    <NavLink key={to} className={({ isActive }) => isActive ? 'active-link' : ''} to={to}>
                        <span className="neon-text">{label}</span>
                    </NavLink>
                ))}
            </div>
            <a href={COPY.nav.bookUrl} target="_blank" rel="noopener noreferrer" className="nav-book-btn">
                {COPY.nav.bookBtn}
            </a>

            {/* Mobile burger */}
            <button className={`burger${menuOpen ? ' burger--open' : ''}`} onClick={() => setMenuOpen(prev => !prev)} aria-label="Menu">
                <span className="burger-bar burger-bar--top" />
                <span className="burger-bar burger-bar--bottom" />
            </button>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="mobile-menu">
                    {NAV_LINKS.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            className={({ isActive }) => `mobile-link${isActive ? ' active-link' : ''}`}
                            to={to}
                            onClick={closeMenu}
                        >
                            {label}
                        </NavLink>
                    ))}
                    <a href={COPY.nav.bookUrl} target="_blank" rel="noopener noreferrer" className="mobile-link" onClick={closeMenu}>
                        {COPY.nav.bookBtn}
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
