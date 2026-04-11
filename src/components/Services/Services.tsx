import { NavLink } from 'react-router-dom';
import { COPY } from '../../copy';
import './Services.css';

interface P {}

export const Services = ({}: P) => {
    return (
        <div className="services-page content-page">
            <div className="services-header">
                <h1 className="services-title">{COPY.services.title}</h1>
                <p className="services-intro">{COPY.services.intro}</p>
            </div>
            <div className="services-grid">
                {COPY.services.items.map(({ title, body }) => (
                    <div key={title} className="service-card">
                        <span className="service-card-title">{title}</span>
                        <p className="service-card-body">{body}</p>
                    </div>
                ))}
            </div>
            <div className="services-hook">
                <p className="services-hook-text">{COPY.services.hookText}</p>
                <NavLink to="/work" className="services-hook-btn">{COPY.services.hookBtn}</NavLink>
            </div>
        </div>
    );
};

export default Services;
