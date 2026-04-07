import './index.css';
import { SITE } from '../../config/site';

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

export default ({}: P) => {
    return (
        <div className="font-comparison-page content-page">
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
        </div>
    );
}
