import './index.css';

interface P {

}

export default ({}: P) => {
    return (
        <div className={`business-card`}>
            <div className="upper">
                <div className="title">
                    <h1><span>ANGEL</span><span>SOLUTIONS</span></h1>
                    <div className="line"></div>
                    <h2>Enterprise software development and consulting</h2>
                </div>
            </div>
            <div className="main">
                <h3>
                    Valentin Angelov
                </h3>
                <p>Manager</p>
            </div>
            <div className="lower">
                <h5>
                    <div>1000 Sofia, Bulgaria</div>
                    <div>Knyaz Alexander Dondukov Blvd 1</div>
                </h5>
                <h5>
                    <div>Phone: +44 752 164 7813</div>
                    <div>Email: valio@angelsolutions.net</div>
                </h5>
            </div>
        </div>
    );
}