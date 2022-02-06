import React from "react";
import './Select.css';

type SelectNameType = {
    id: string
    title: string
}

type SelectType = {
    selectNames: SelectNameType[]
}

function SelectForMemo(props: SelectType) {


    return (
        <div>
            <span className="custom-dropdown big">
                <select>
                {props.selectNames.map(n => {
                    return (
                        <option id={n.id} key={n.id}>{n.title}
                        </option>
                    )
                })}
                </select>
            </span>

        </div>
    );
}
export const Select = React.memo(SelectForMemo);

