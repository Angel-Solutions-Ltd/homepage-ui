import './index.css';
import { USEFUL_LINKS } from '../../config/usefulLinks';

interface P {}

export default ({}: P) => {
    return (
        <div className="useful-links-page content-page">
            <div className="useful-links-container">
                {USEFUL_LINKS.map((section) => (
                    <section key={section.title} className="link-section">
                        <h2 className="section-title">{section.title}</h2>
                        <div className="links-grid">
                            {section.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-item"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
