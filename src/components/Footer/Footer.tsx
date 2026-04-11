import { SITE } from '../../config/site';
import { COPY } from '../../copy';
import './Footer.css';

interface P {
    isDark: boolean;
    toggleTheme: () => void;
}

export const Footer = ({ isDark, toggleTheme }: P) => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <span className="footer-copy">{COPY.footer.copyrightPrefix} {year} {SITE.company.name}</span>
            <a className="footer-email" href={`mailto:${SITE.contact.email}`}>
                {SITE.contact.email}
            </a>
            <button className="footer-theme-toggle" onClick={toggleTheme}>
                {isDark ? '☀' : '☾'}
            </button>
        </footer>
    );
};

export default Footer;
