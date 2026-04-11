import React, { CSSProperties } from 'react';
import './PieItem.css';

interface P {
    content: string;
    color: string;
    height?: number;
    width?: number;
    rotation: number;
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}

export const PieItem = ({ content, color, height, width, rotation, top, left, bottom, right }: P) => {
    const styles = {
        holder: {
            cursor: 'pointer',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: `${height}px`,
            width: `${width}px`,
            transform: `rotate(${rotation}deg)`,
            top: `${top}px`,
            left: `${left}px`,
            bottom: `${bottom}px`,
            right: `${right}px`,
        } as CSSProperties,
        content: {
            fontWeight: 1000,
            position: 'absolute',
            transform: `rotate(-${rotation}deg)`,
        } as CSSProperties,
    };

    return (
        <div className="pie-item-holder" style={styles.holder}>
            <span className="pie-item-content" style={styles.content}>{content}</span>
            <svg style={{ overflow: 'visible' }} height="55px" width="75px" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20 0 Q 38 15 57 0 L 75 45 Q 38 65 0 45 Z" stroke="white" strokeWidth="1" fill="transparent"></path>
            </svg>
        </div>
    );
};

export default PieItem;
