import './index.css';
import {useState} from "react";
import Dice from "../Dice";

import treasure from '../../assets/images/treasure.png';

interface P {

}

export default ({}: P) => {
    const SET_PLAYER_LIMIT = 4;
    const PLAYER_NUM = 2;
    const [counter, setCounter] = useState(0);
    const [turn, setTurn] = useState(1);
    const [isRolling, setRolling] = useState(false);
    const [currentFace, setCurrentFace] = useState([0,0]);

    const rollDice = () => {
        setRolling(true);
        setCounter(counter + 1);
        const randomFace1 = Math.floor(Math.random() * 6) + 1;
        const randomFace2 = Math.floor(Math.random() * 6) + 1;
        setCurrentFace([randomFace1, randomFace2]);
        if(randomFace1 !== randomFace2) {
            setTurn((prevState) => prevState >= SET_PLAYER_LIMIT ? 1 : prevState + 1);
        }

        setTimeout(() => setRolling(false), 3000);
    };

    return (
        <div className={`monopoly-holder content-page`}>

            <div className={`dice-wrapper ${isRolling && 'moveDices'}`}>
                <Dice counter={counter} face={currentFace[0]}/>
                <Dice counter={counter} face={currentFace[1]}/>
            </div>

            <div className={`monopoly-board nasran-color`}>
                <div className={`upper-part`}>
                    <div className={`main-square`}></div>
                    <div className={`property-rect`}>
                        <div className={`property-color p-red`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>
                    <div className={`secondary-rect`}></div>
                    <div className={`property-rect`}>
                        <div className={`property-color p-red`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>
                    <div className={`property-rect`}>
                        <div className={`property-color p-red`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>
                    <div className={`secondary-rect`}></div>
                    <div className={`property-rect`}>
                        <div className={`property-color p-yellow`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>
                    <div className={`property-rect`}>
                        <div className={`property-color p-yellow`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>
                    <div className={`secondary-rect`}></div>
                    <div className={`property-rect`}>
                        <div className={`property-color p-yellow`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>
                    <div className={`main-square`}></div>
                </div>
                <div className={`mid-part`}>
                    <div className={`mid-left-part`}>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-orange`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-orange`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                        <div className={`secondary-rect-rev`}></div>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-orange`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                        <div className={`secondary-rect-rev`}></div>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-pink`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-pink`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                        <div className={`secondary-rect-rev`}></div>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-pink`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                    </div>

                    <div className={`mid-square`}>
                        <div className={`treasure-card`}>
                            <div className={`repeating-border rb-top`}>? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className={`repeating-border rb-bot`}>? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className={`repeating-border rb-left`}>? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className={`repeating-border rb-right`}>? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className={`corner-dot cd-1`}></div>
                            <div className={`corner-dot cd-2`}></div>
                            <div className={`corner-dot cd-3`}></div>
                            <div className={`corner-dot cd-4`}></div>
                            <img className={`treasure-img`} src={treasure} alt="" />
                        </div>

                        <div className={`chance-card`}>
                            <div className={`repeating-border rb-top`}>? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className={`repeating-border rb-bot`}>? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className={`repeating-border rb-left`}>? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className={`repeating-border rb-right`}>? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ? &#183; ?</div>
                            <div className={`corner-dot cd-1`}></div>
                            <div className={`corner-dot cd-2`}></div>
                            <div className={`corner-dot cd-3`}></div>
                            <div className={`corner-dot cd-4`}></div>
                            <img className={`treasure-img`} src={treasure} alt="" />
                        </div>
                    </div>

                    <div className={`mid-right-part`}>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-green`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-green`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>

                        <div className={`secondary-rect-rev`}></div>

                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-green`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>

                        <div className={`secondary-rect-rev`}></div>
                        <div className={`secondary-rect-rev`}></div>

                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-darkblue`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                        <div className={`secondary-rect-rev`}></div>
                        <div className={`property-rect-rev`}>
                            <div className={`property-color p-darkblue`}></div>
                            <div className={`property-name`}></div>
                            <div className={`property-price`}></div>
                        </div>
                    </div>
                </div>
                <div className={`lower-part`}>
                    <div className={`main-square`}></div>

                    <div className={`property-rect`}>
                        <div className={`property-color p-blue`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>

                    <div className={`secondary-rect`}></div>

                    <div className={`property-rect`}>
                        <div className={`property-color p-blue`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>
                    <div className={`property-rect`}>
                        <div className={`property-color p-blue`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>

                    <div className={`secondary-rect`}></div>
                    <div className={`secondary-rect`}></div>

                    <div className={`property-rect`}>
                        <div className={`property-color p-brown`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>

                    <div className={`secondary-rect`}></div>

                    <div className={`property-rect`}>
                        <div className={`property-color p-brown`}></div>
                        <div className={`property-name`}></div>
                        <div className={`property-price`}></div>
                    </div>

                    <div className={`main-square`}></div>
                </div>
            </div>


            {/*<button onClick={rollDice} disabled={isRolling}>*/}
            {/*    Roll Dice*/}
            {/*</button>*/}

            {/*<div>Играч {turn}'s turn</div>*/}

        </div>
    );
}