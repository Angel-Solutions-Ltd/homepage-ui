import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { SITE } from '../../config/site';
import { USEFUL_LINKS } from '../../config/usefulLinks';
import { COPY } from '../../copy';
import { Calendar } from '../Calendar';
import './Misc.css';

const FONTS = [
    { label: 'Source Sans Light', family: 'Source Sans Light' },
    { label: 'Source3 Regular',   family: 'Source3' },
    { label: 'Source3 Light',     family: 'Source3Light' },
    { label: 'Lovelo Line Light', family: 'LoveloLineLight' },
    { label: 'Lovelo Black',      family: 'LoveloBlack' },
    { label: 'AS Font',           family: 'asFont' },
    { label: 'AS Font BG',        family: 'asFontBG' },
];

const [firstWord, secondWord] = SITE.company.name.split(' ');

interface P {}

export const Misc = ({}: P) => {
    const letterRef = useRef<HTMLHeadingElement>(null);

    const download = async () => {
        if (!letterRef.current) return;
        const canvas = await html2canvas(letterRef.current, { backgroundColor: null });
        const link = document.createElement('a');
        link.download = 'logo.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <div className="misc-page content-page">

            <section className="misc-section">
                <h2 className="misc-section-title">{COPY.misc.fontComparison}</h2>
                <div className="font-comparison-list">
                    {FONTS.map(({ label, family }) => (
                        <div key={family} className="font-comparison-row">
                            <span className="font-label">{label}</span>
                            <span className="font-sample" style={{ fontFamily: family }}>
                                <span className="word-first">{firstWord}</span>
                                <span className="word-second">{secondWord}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="misc-section">
                <h2 className="misc-section-title">{COPY.misc.letterLogo}</h2>
                <div className="second-logo-inner">
                    <h1 className="letter-holder" ref={letterRef}>A</h1>
                    <button className="download-btn" onClick={download}>{COPY.misc.downloadBtn}</button>
                </div>
            </section>

            <section className="misc-section">
                <h2 className="misc-section-title">{COPY.misc.usefulLinks}</h2>
                <div className="useful-links-container">
                    {USEFUL_LINKS.map((section) => (
                        <div key={section.title} className="link-section">
                            <h3 className="section-title">{section.title}</h3>
                            <div className="links-grid">
                                {section.links.map((link, i) => (
                                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="link-item">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="misc-section misc-section--calendar">
                <h2 className="misc-section-title">{COPY.misc.calendar}</h2>
                <Calendar />
            </section>

        </div>
    );
};

export default Misc;
