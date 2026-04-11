import './MonopolyGame.css';
import { useState, useEffect } from 'react';
import { Dice } from '../Dice';
import treasure from '../../assets/images/treasure.png';

interface P {}

export const MonopolyGame = ({}: P) => {
    const SET_PLAYER_LIMIT = 4;
    const [counter, setCounter] = useState(0);
    const [turn, setTurn] = useState(1);
    const [isRolling, setRolling] = useState(false);
    const [currentFace, setCurrentFace] = useState([0, 0]);

    useEffect(() => {
        if (!isRolling) return;
        const timer = setTimeout(() => setRolling(false), 3000);
        return () => clearTimeout(timer);
    }, [isRolling]);

    const rollDice = () => {
        setRolling(true);
        setCounter(prev => prev + 1);
        const randomFace1 = Math.floor(Math.random() * 6) + 1;
        const randomFace2 = Math.floor(Math.random() * 6) + 1;
        setCurrentFace([randomFace1, randomFace2]);
        if (randomFace1 !== randomFace2) {
            setTurn(prevState => prevState >= SET_PLAYER_LIMIT ? 1 : prevState + 1);
        }
    };

    return (
        <div className="monopoly-holder content-page">
            <div className={`dice-wrapper ${isRolling && 'moveDices'}`}>
                <Dice counter={counter} face={currentFace[0]} />
                <Dice counter={counter} face={currentFace[1]} />
            </div>
            <div className="monopoly-board nasran-color">
                <div className="upper-part">
                    <div className="main-square"></div>
                    <div className="property-rect"><div className="property-color p-red"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="secondary-rect"></div>
                    <div className="property-rect"><div className="property-color p-red"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="property-rect"><div className="property-color p-red"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="secondary-rect"></div>
                    <div className="property-rect"><div className="property-color p-yellow"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="property-rect"><div className="property-color p-yellow"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="secondary-rect"></div>
                    <div className="property-rect"><div className="property-color p-yellow"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="main-square"></div>
                </div>
                <div className="mid-part">
                    <div className="mid-left-part">
                        <div className="property-rect-rev"><div className="property-color p-orange"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="property-rect-rev"><div className="property-color p-orange"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="secondary-rect-rev"></div>
                        <div className="property-rect-rev"><div className="property-color p-orange"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="secondary-rect-rev"></div>
                        <div className="property-rect-rev"><div className="property-color p-pink"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="property-rect-rev"><div className="property-color p-pink"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="secondary-rect-rev"></div>
                        <div className="property-rect-rev"><div className="property-color p-pink"></div><div className="property-name"></div><div className="property-price"></div></div>
                    </div>
                    <div className="mid-square">
                        <div className="treasure-card">
                            <div className="repeating-border rb-top">? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className="repeating-border rb-bot">? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className="repeating-border rb-left">? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className="repeating-border rb-right">? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className="corner-dot cd-1"></div><div className="corner-dot cd-2"></div><div className="corner-dot cd-3"></div><div className="corner-dot cd-4"></div>
                            <img className="treasure-img" src={treasure} alt="Treasure card" />
                        </div>
                        <div className="chance-card">
                            <div className="repeating-border rb-top">? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className="repeating-border rb-bot">? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className="repeating-border rb-left">? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className="repeating-border rb-right">? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className="corner-dot cd-1"></div><div className="corner-dot cd-2"></div><div className="corner-dot cd-3"></div><div className="corner-dot cd-4"></div>
                            <img className="treasure-img" src={treasure} alt="Treasure card" />
                        </div>
                    </div>
                    <div className="mid-right-part">
                        <div className="property-rect-rev"><div className="property-color p-green"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="property-rect-rev"><div className="property-color p-green"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="secondary-rect-rev"></div>
                        <div className="property-rect-rev"><div className="property-color p-green"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="secondary-rect-rev"></div>
                        <div className="secondary-rect-rev"></div>
                        <div className="property-rect-rev"><div className="property-color p-darkblue"></div><div className="property-name"></div><div className="property-price"></div></div>
                        <div className="secondary-rect-rev"></div>
                        <div className="property-rect-rev"><div className="property-color p-darkblue"></div><div className="property-name"></div><div className="property-price"></div></div>
                    </div>
                </div>
                <div className="lower-part">
                    <div className="main-square"></div>
                    <div className="property-rect"><div className="property-color p-blue"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="secondary-rect"></div>
                    <div className="property-rect"><div className="property-color p-blue"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="property-rect"><div className="property-color p-blue"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="secondary-rect"></div>
                    <div className="secondary-rect"></div>
                    <div className="property-rect"><div className="property-color p-brown"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="secondary-rect"></div>
                    <div className="property-rect"><div className="property-color p-brown"></div><div className="property-name"></div><div className="property-price"></div></div>
                    <div className="main-square"></div>
                </div>
            </div>
        </div>
    );
};

export default MonopolyGame;
