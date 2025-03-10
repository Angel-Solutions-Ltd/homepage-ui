import React from 'react';

import './index.css';
import Calendar from "../Calendar";
import PieItem from "../PieItem";

interface P {

}

export default ({}: P) => {
    return (
        <div className={`content-page`}>
            <Calendar/>
            {/*<div className={`pie-items`}>*/}
            {/*    <div className={`pie-items-center`}>*/}
            {/*        {`N`}*/}
            {/*    </div>*/}
            {/*    <PieItem height={50} width={50} color={'red'} content={`1`} rotation={45} top={50} right={50}/>*/}

            {/*    <PieItem height={50} width={50} color={'green'} content={`2`} rotation={90} top={-10} right={70}/>*/}
            {/*    <PieItem height={50} width={50} color={'blue'} content={`3`} rotation={135} top={10} left={10}/>*/}
            {/*    <PieItem height={50} width={50} color={'orange'} content={`4`} rotation={180} top={10} left={10}/>*/}

            {/*    <PieItem height={50} width={50} color={'purple'} content={`N`} rotation={225} bottom={10} left={10}/>*/}

            {/*    <PieItem height={50} width={50} color={'black'} content={`6`} rotation={270} bottom={10} right={10}/>*/}
            {/*    <PieItem height={50} width={50} color={'yellow'} content={`7`} rotation={315} top={10} right={10}/>*/}
            {/*    <PieItem height={50} width={50} color={'pink'} content={`8`} rotation={360} bottom={10} right={10}/>*/}
            {/*</div>*/}
        </div>
    );
}