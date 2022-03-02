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
    }, );

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
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    console.log("ClockBasicExample");

    useEffect(() => {
        let clock = new Date();
        hours = clock.getHours();
        minutes = clock.getMinutes();
        seconds = clock.getSeconds();
    }, []);

    return (
        <div>
            {setHours(hours)} : {setMinutes(minutes)} : {setSeconds(seconds)}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {/*<button onClick={() => setCount(count + 1)}>count+</button>*/}
        </div>
    )
}

