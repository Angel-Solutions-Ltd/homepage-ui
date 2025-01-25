import './index.css';
import {useState} from "react";

interface P {
    counter: number
    face: number
}

export default ({counter, face}: P) => {
    return (
        <div key={counter} className="dice-container">
            <div className={`dice roll-${face}`}>
                <div className="face front">
                    <span className="dot"></span>
                </div>
                <div className="face back">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="face right">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="face left">
                    <div className={`dot-holder`}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className={`dot-holder`}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="face top">
                    <div className={`dot-holder`}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <span className="dot"></span>
                    <div className={`dot-holder`}>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="face bottom" style={{flexDirection: 'column'}}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        </div>
    );
}