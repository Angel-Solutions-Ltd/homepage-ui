import React, {useRef, useState} from 'react';

import './index.css';
import {capitalizeFirstNLetters, formatDate} from "../../utils/helpers";
import useLocalStorage from "../../hooks/useLocalStorage";

interface P {

}

export default ({}: P) => {

    const [activitiesMap, setActivitiesMap] = useLocalStorage('activities', {});

    const handleAddActivity = (date: string, activity: string) => {
        if (!date || !activity) return;

        const updatedActivities = { ...activitiesMap };
        if (updatedActivities[date]) {
            updatedActivities[date].push(activity);
        } else {
            updatedActivities[date] = [activity];
        }
        setActivitiesMap(updatedActivities);
    };

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const year = new Date().getFullYear();

    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonthNum = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [currentMonth, setCurrentMonth] = useState(currentMonthNum);

    const [currentInput, setCurrentInput] = useState<number | null>(null);

    const renderMonthsAndDays =
    months.map((month, monthIndex) => {
        const daysInMonth = getDaysInMonth(monthIndex, year);
        const isActiveMonth = monthIndex === currentMonth;
        const isCurrMonth = monthIndex === currentMonthNum;


        return (
            <div key={month} className={`month ${isActiveMonth ? 'active-month' : ''}`}>
                <h2 className={`month-name`}>{month}</h2>
                <div className={`weekdays`}>
                    {days.map((day, key) => (
                        <div className={`weekday`} key={key}>{capitalizeFirstNLetters(day, 1)}</div>
                    ))}
                </div>
                <div className={`days`}>
                    {Array.from({ length: daysInMonth }, (_, dayIndex) => {
                        let stringDate = `${currentYear}-${monthIndex + 1}-${dayIndex + 1}`;
                        let thisDate = new Date(stringDate);

                        let extraChildren: any = <></>;

                        if(dayIndex === 0) {
                            let dayOfWeek = thisDate.getDay();
                            if(dayOfWeek === 0) dayOfWeek = 7;
                            if(dayOfWeek !== 1) {
                                extraChildren = Array.from({ length: dayOfWeek - 1 }, (_, dayIndex) => (
                                    <div key={dayIndex + 1} className={`day basic-item dummy-item`} style={{visibility: 'hidden'}}>0</div>
                                ));
                            }
                        }

                        let activitiesClass = activitiesMap[stringDate]?.length > 0 ? 'activities-item' : '';
                        let activeClass = (currentInput === thisDate.getTime())
                            ? 'active-item' : 'basic-item';
                        let currentClass = (isCurrMonth && (dayIndex + 1) === currentDay) ? 'current-day' : '';
                        return (
                            <>
                                {extraChildren}
                                <div key={dayIndex + 1} className={`day ${currentClass} ${activeClass} ${activitiesClass}`} onClick={(e: any) => {
                                    !e.target.className.includes('day-input') && setCurrentInput(
                                        prevState => prevState === thisDate.getTime() ? null : thisDate.getTime()
                                    )
                                }}>
                                    {dayIndex + 1}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        );
    });

    const changeMonth = (month: number) => {
        setCurrentMonth(prevState => prevState + month);
    }

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