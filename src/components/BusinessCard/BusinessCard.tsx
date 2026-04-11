import { useState } from 'react';
import { SITE } from '../../config/site';
import './BusinessCard.css';

const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

interface P {}

export const BusinessCard = ({}: P) => {
    const [copied, setCopied] = useState<string | null>(null);
    const [first, second] = SITE.company.nameParts;

    const copy = (value: string, key: string) => {
        navigator.clipboard.writeText(value).then(() => {
            setCopied(key);
            setTimeout(() => setCopied(null), 1800);
        });
    };

    return (
        <div className="business-card-page">
            <div className="business-card">

                <div className="bc-top">
                    <div className="bc-company-name">
                        <span className="bc-name-first">{first}</span>
                        <span className="bc-name-second">{second}</span>
                    </div>
                    <p className="bc-headline">{SITE.company.headline}</p>
                </div>

                <div className="bc-divider" />

                <div className="bc-bottom">
                    <div className="bc-person">
                        <span className="bc-person-name">{SITE.contact.name}</span>
                        <span className="bc-person-title">{SITE.contact.position}</span>
                    </div>
                    <div className="bc-contact">
                        <span className="bc-contact-row">
                            <button className="bc-copy-btn" onClick={() => copy(SITE.contact.phone, 'phone')} title="Copy phone">
                                {copied === 'phone' ? <CheckIcon /> : <CopyIcon />}
                            </button>
                            {SITE.contact.phone}
                        </span>
                        <span className="bc-contact-row">
                            <button className="bc-copy-btn" onClick={() => copy(SITE.contact.email, 'email')} title="Copy email">
                                {copied === 'email' ? <CheckIcon /> : <CopyIcon />}
                            </button>
                            {SITE.contact.email}
                        </span>
                        <span>{SITE.contact.address.line1}</span>
                        <span>{SITE.contact.address.line2}</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessCard;
