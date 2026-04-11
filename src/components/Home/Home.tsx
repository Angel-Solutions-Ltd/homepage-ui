import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { COPY } from '../../copy';
import './Home.css';

const TYPING_SPEED = 55;
const POST_TYPE_DELAY = 280;

interface P {}

export const Home = ({}: P) => {
    const [displayed, setDisplayed] = useState('');
    const [typingDone, setTypingDone] = useState(false);
    const [showSub, setShowSub] = useState(false);

    useEffect(() => {
        let i = 0;
        const tick = () => {
            i++;
            setDisplayed(COPY.home.headline.slice(0, i));
            if (i < COPY.home.headline.length) {
                setTimeout(tick, TYPING_SPEED);
            } else {
                setTimeout(() => {
                    setTypingDone(true);
                    setTimeout(() => setShowSub(true), 100);
                }, POST_TYPE_DELAY);
            }
        };
        setTimeout(tick, TYPING_SPEED);
    }, []);

    // TODO: Home page — things to consider adding below the headline/CTA:
    //
    // 1. STATS BAR — a single row of 3–4 key numbers, e.g.:
    //    "3 countries · 10+ systems delivered · 1000s of daily users · 5+ years"
    //    Grounding and immediately credibility-building.
    //
    // 2. SERVICES TEASER — 3 highlighted services with a one-liner each and a
    //    "See all services →" link. Saves the visitor a click if they're just scanning.
    //
    // 3. WORK PREVIEW — the 3 case study titles as a minimal list or card row,
    //    letting visitors gauge the type and scale of past work from the home page.
    //
    // 4. PROCESS STRIP — 3 steps: "Consult → Build → Deliver" with a sentence each.
    //    Reduces friction for clients who don't know how to start.

    return (
        <div className="content-page home-page">
            <div className="home-headline">
                <span className="home-headline-main">
                    {displayed}
                    <span className={`home-cursor${typingDone ? ' home-cursor--done' : ''}`}>|</span>
                </span>
                <span className={`home-headline-sub${showSub ? ' home-headline-sub--visible' : ''}`}>
                    {COPY.home.subline}
                </span>
            </div>
            <NavLink to="/services" className={`home-cta${showSub ? ' home-cta--visible' : ''}`}>
                {COPY.home.cta}
            </NavLink>
            <a
                href={COPY.nav.bookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`home-book${showSub ? ' home-book--visible' : ''}`}
            >
                {COPY.nav.bookBtn}
            </a>
        </div>
    );
};

export default Home;
