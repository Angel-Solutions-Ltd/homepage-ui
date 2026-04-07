import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

import './index.css';

export default () => {
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
        <div className="content-page second-logo-page">
            <h1 className="letter-holder" ref={letterRef}>A</h1>
            <button className="download-btn" onClick={download}>Download PNG</button>
        </div>
    );
}
