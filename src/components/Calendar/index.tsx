import React, { useState, useMemo } from 'react';

import './index.css';
import {capitalizeFirstNLetters, formatDate} from "../../utils/helpers";
import useLocalStorage from "../../hooks/useLocalStorage";

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
};

interface P {

}

export default ({}: P) => {

    const [activitiesMap, setActivitiesMap] = useLocalStorage('activities', {});

    const handleAddActivity = (date: string, activity: string) => {
        if (!date || !activity) return;

        const updatedActivities = { ...activitiesMap };
        if (updatedActivities[date]) {
            updatedActivities[date] = [...updatedActivities[date], activity];
        } else {
            updatedActivities[date] = [activity];
        }
        setActivitiesMap(updatedActivities);
    };

    const today = new Date();
    const year = today.getFullYear();
    const currentMonthNum = today.getMonth();
    const currentDay = today.getDate();

    const [currentMonth, setCurrentMonth] = useState(currentMonthNum);
    const [currentInput, setCurrentInput] = useState<number | null>(null);

    const renderMonthsAndDays = useMemo(() => MONTHS.map((month, monthIndex) => {
        const daysInMonth = getDaysInMonth(monthIndex, year);
        const isActiveMonth = monthIndex === currentMonth;
        const isCurrMonth = monthIndex === currentMonthNum;

        return (
            <div key={month} className={`month ${isActiveMonth ? 'active-month' : ''}`}>
                <h2 className={`month-name`}>{month}</h2>
                <div className={`weekdays`}>
                    {DAYS.map((day, key) => (
                        <div className={`weekday`} key={key}>{capitalizeFirstNLetters(day, 1)}</div>
                    ))}
                </div>
                <div className={`days`}>
                    {Array.from({ length: daysInMonth }, (_, dayIndex) => {
                        const stringDate = `${year}-${monthIndex + 1}-${dayIndex + 1}`;
                        const thisDate = new Date(stringDate);
                        const thisTime = thisDate.getTime();

                        let extraChildren: React.ReactNode = null;

                        if (dayIndex === 0) {
                            let dayOfWeek = thisDate.getDay();
                            if (dayOfWeek === 0) dayOfWeek = 7;
                            if (dayOfWeek !== 1) {
                                extraChildren = Array.from({ length: dayOfWeek - 1 }, (_, i) => (
                                    <div key={`dummy-${i}`} className={`day basic-item dummy-item`} style={{visibility: 'hidden'}}>0</div>
                                ));
                            }
                        }

                        const activitiesClass = activitiesMap[stringDate]?.length > 0 ? 'activities-item' : '';
                        const activeClass = currentInput === thisTime ? 'active-item' : 'basic-item';
                        const currentClass = (isCurrMonth && (dayIndex + 1) === currentDay) ? 'current-day' : '';

                        return (
                            <React.Fragment key={thisTime}>
                                {extraChildren}
                                <div className={`day ${currentClass} ${activeClass} ${activitiesClass}`} onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                                    !(e.target as HTMLElement).className.includes('day-input') && setCurrentInput(
                                        prevState => prevState === thisTime ? null : thisTime
                                    );
                                }}>
                                    {dayIndex + 1}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        );
    }), [currentMonth, currentMonthNum, currentDay, currentInput, activitiesMap, year]);

    const changeMonth = (delta: number) => {
        setCurrentMonth(prev => Math.min(11, Math.max(0, prev + delta)));
    };

    return (
        <div className={`calendar-outer`}>
            {currentMonth !== 0 && <div className={`arrow-left`} onClick={() => changeMonth(-1)}/>}
            {currentMonth !== 11 && <div className={`arrow-right`} onClick={() => changeMonth(1)}/>}
            {currentInput !== null && <div className={`day-input-holder`}>
                <div>Add an activity for {formatDate(currentInput)}</div>
                <input className={`day-input`} type={'text'}/>
                <button>Save</button>
            </div>}
            <div className={`calendar-holder`}>
                <div className={`calendar-scroller`} style={{left: `-${currentMonth * 460}px`}}>
                    {renderMonthsAndDays}
                </div>
            </div>
        </div>
    );
}
