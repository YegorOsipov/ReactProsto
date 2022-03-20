import React, {useEffect, useState} from 'react';

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
            return () => clearInterval(timer);
        }, 1000);
    }, []);

    const addZero = (num: number) => num < 10 ? "0" + num : num;

    return (
        <div>
            {addZero(date.getHours())} : {addZero(date.getMinutes())} : {addZero(date.getSeconds())}
        </div>
    );
};

export default Clock;