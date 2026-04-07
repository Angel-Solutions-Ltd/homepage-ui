import './index.css';
import { SITE } from '../../config/site';

interface P {

}

export default ({}: P) => {
    return (
        <div className={`business-card`}>
            <div className="upper">
                <div className="title">
                    <h1>{SITE.company.nameParts.map(part => <span key={part}>{part}</span>)}</h1>
                    <div className="line"></div>
                    <h2>{SITE.company.headline}</h2>
                </div>
            </div>
            <div className="main">
                <h3>{SITE.contact.name}</h3>
                <p>{SITE.contact.position}</p>
            </div>
            <div className="lower">
                <h5>
                    <div>{SITE.contact.address.line1}</div>
                    <div>{SITE.contact.address.line2}</div>
                </h5>
                <h5>
                    <div>Phone: {SITE.contact.phone}</div>
                    <div>Email: {SITE.contact.email}</div>
                </h5>
            </div>
        </div>
    );
}
