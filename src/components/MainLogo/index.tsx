import './index.css';

interface P {

}

export default ({}: P) => {
    return (
        <div className={`content-page`}>
            <div className={`logo-wrapper`}>
                <div className={`line-1`}></div>
                <div className={`line-2`}></div>
                <div className={`line-3`}></div>
                <div className={`line-4`}></div>

                <div className={`top-left`}></div>
                <div className={`top-mid`}></div>
                <div className={`top-right`}></div>

                <div className={`bot-left`}></div>
                <div className={`bot-mid`}></div>
                <div className={`bot-right`}></div>

                <div className={`mid-line`}></div>
                {/*<div className={`triangle`}></div>*/}
            </div>
        </div>
    );
}