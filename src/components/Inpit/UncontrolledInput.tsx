import React, {useRef, useState} from "react";


function UncontrolledInputForMemo() {


    const [value, setValue] = useState('');
    // const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    const inputRef = useRef<HTMLInputElement>(null);
    const addValue = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={addValue}>+</button> actual value - {value}
        </div>


    )
}
export const UncontrolledInput = React.memo(UncontrolledInputForMemo);