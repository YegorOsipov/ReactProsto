import React, {useState} from 'react';
import { AnalogClock } from './AnalogClock';
import {DigitalClock} from "./DigitalClock";

export const Clock = () => {
    const [analog, setAnalog] = useState(false);

    return (
        <div>
            <button onClick={() => setAnalog(!analog)}>{analog ? "Аналоговые часы" : "Цифровые часы"}</button>

            {analog ? <DigitalClock/> : <AnalogClock/>}
        </div>
    );
};

