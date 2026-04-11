import { COPY } from '../../copy';
import './Work.css';

interface P {}

export const Work = ({}: P) => {
    return (
        <div className="work-page content-page">
            <div className="work-header">
                <h1 className="work-title">{COPY.work.title}</h1>
                <p className="work-intro">{COPY.work.intro}</p>
            </div>
            <div className="work-list">
                {COPY.work.cases.map(({ index, client, title, challenge, solution, outcome, tags }) => (
                    <div key={index} className="case-study">
                        <div className="case-meta">
                            <span className="case-index">{index}</span>
                            <span className="case-client">{client}</span>
                        </div>
                        <h2 className="case-title">{title}</h2>
                        <div className="case-body">
                            <div className="case-col">
                                <span className="case-col-label">Challenge</span>
                                <p className="case-col-text">{challenge}</p>
                            </div>
                            <div className="case-col">
                                <span className="case-col-label">Solution</span>
                                <p className="case-col-text">{solution}</p>
                            </div>
                            <div className="case-col">
                                <span className="case-col-label">Outcome</span>
                                <p className="case-col-text">{outcome}</p>
                            </div>
                        </div>
                        <div className="case-tags">
                            {tags.map(tag => (
                                <span key={tag} className="case-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
