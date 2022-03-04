import React, {useEffect, useState} from "react";

export default {
    title: "Analog Clock Demo",
}

export const AnalogClockExample = () => {
    let [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const addZero = (num: number) => String(num).length < 2 ? 0 + String(num) : num;

    return (
        <div>
            {addZero(dateTime.getHours())}: {addZero(dateTime.getMinutes())} : {addZero(dateTime.getSeconds())}
        </div>
    )
}

