import React from "react";

export type ValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingValueType = {
    onClick: (value: ValueType) => void
    value: ValueType
}


function RatingForMemo(props: RatingValueType) {
    console.log('Rating rendered');

    const ratingStyle = {
        marginTop: '30px',
        cursor: 'pointer'
    }

    return (
        <div style={ratingStyle}>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    value: ValueType
    onClick: (value:ValueType) => void
}

function StarForMemo(props: StarPropsType) {
    return <span onClick={ () => {props.onClick(props.value)} }>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}
export const Star = React.memo(StarForMemo);
export const Rating = React.memo(RatingForMemo);