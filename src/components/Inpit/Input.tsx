import React, {ChangeEvent, useState} from "react";
import {InputValue} from "../../App";

type InputType = {
    inputValues: Array<InputValue>
    addItem: (value: string) => void
    changeStatus: (id: string, isDone: boolean) => void
}

function InputForMemo(props: InputType) {


    const [value, setValue] = useState<string>('');
    const OnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
    const addValue = () => {
        props.addItem(value);
        setValue('');
    }

    return (
        <div>
           <div>
               <input value={value} onChange={OnChangeHandler}/>
               <button onClick={addValue}>+</button>
           </div>

            {props.inputValues.map(el => {
                const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
                    props.changeStatus(el.id, e.currentTarget.checked);
                }

                return (
                    <div key={el.id}>
                        <input type="checkbox" checked={el.isDone} onChange={changeStatus}/><span>{el.title}</span>
                    </div>
                )
            })}
        </div>
    )
}
export const Input = React.memo(InputForMemo);