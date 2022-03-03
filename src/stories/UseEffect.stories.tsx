import React, {useEffect, useState} from "react";

export default {
    title: "UseEffect Demo",
}

export const SimpleExample = () => {
    const [count, setCount] = useState(1);
    const [fake, setFake] = useState(1);
    console.log("SimpleExample");

    useEffect(() => {
        console.log("UseEffect every render");
        document.title = count.toString();
    },);

    useEffect(() => {
        console.log("UseEffect only first render(componentDidMount)");
        document.title = count.toString();
    }, []);

    useEffect(() => {
        console.log("UseEffect first render and every count change");
        document.title = count.toString();
    }, [count]);

    return (
        <div>
            hello, {count} {fake}
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <button onClick={() => setCount(count + 1)}>count+</button>
        </div>
    )
}

export const SetTimeOutExample = () => {
    const [count, setCount] = useState(1);
    const [fake, setFake] = useState(1);
    console.log("SetTimeOutExample");

    useEffect(() => {
        setInterval(() => {
            setCount(counter => counter + 1);
        }, 1000);
    }, []);

    return (
        <div>
            hello, count: {count} fake: {fake}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCount(count + 1)}>count+</button>*/}
        </div>
    )
}

export const ClockBasicExample = () => {
    // let clock = new Date().toLocaleString();
    const date = new Date();
    let [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                hours: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds(),
            });
            return () => clearInterval(timer);
        }, 1000);
    }, []);

    const addZero = (num: number) => {
        return String(num).length < 2 ? 0 + String(num) : num;
    }
    return (
        <div>
            {addZero(dateTime.hours)} : {addZero(dateTime.minutes)} : {addZero(dateTime.seconds)}

            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCount(count + 1)}>count+</button>*/}
        </div>
    )
}

