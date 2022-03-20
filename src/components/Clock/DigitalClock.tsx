import React, {useEffect, useState} from 'react';
import styles from "./DigitalClock.module.css"

export const DigitalClock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
            return () => clearInterval(timer);
        }, 1000);
    }, []);

    const addZero = (num: number) => num < 10 ? "0" + num : num;

    return (
        <div className={styles.dynamic_clock}>
            <span>
                    {addZero(date.getHours())} :
                </span>
            <span>
                    {addZero(date.getMinutes())} :
                </span>
            <span>
                    {addZero(date.getSeconds())}
                </span>
        </div>
    );
};