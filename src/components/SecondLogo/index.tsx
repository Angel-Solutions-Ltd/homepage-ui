import './index.css';
import { SITE } from '../../config/site';

interface P {

}

export default ({}: P) => {
    return (
        <div className={`content-page second-logo-page`}>
            <h1 className={`letter-holder`}>{SITE.company.initials}</h1>
        </div>
    );
}
