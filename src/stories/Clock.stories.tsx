import React, {useState} from "react";
import {DigitalClock} from "../components/Clock/DigitalClock";
import {AnalogClock} from "../components/Clock/AnalogClock";

export default {
    title: "Clock Demo",
}

export const ClockExample = () => {
    const [analog, setAnalog] = useState(false);

    return (
        <div>
            <button onClick={() => setAnalog(!analog)}>{analog ? "Аналоговые часы" : "Цифровые часы"}</button>

            {analog ? <DigitalClock/> : <AnalogClock/>}
        </div>
    );
};