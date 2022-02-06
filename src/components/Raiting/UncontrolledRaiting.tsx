import React, {useState} from "react";


function UncontrolledRatingForMemo() {
    console.log('Rating rendered');
    let [value, setValue] = useState(0)

    const ratingStyle = {
        marginTop: '30px',
        cursor: 'pointer'
    }

    return (
        <div style={ratingStyle}>
            <Star selected={value > 0} setValue={() => setValue(1)}/>
            <Star selected={value > 1} setValue={() => setValue(2)}/>
            <Star selected={value > 2} setValue={() => setValue(3)}/>
            <Star selected={value > 3} setValue={() => setValue(4)}/>
            <Star selected={value > 4} setValue={() => setValue(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function StarForMemo(props: StarPropsType) {
    return <span onClick={ () => {props.setValue()} }> {props.selected ? <b>star </b> : 'star '} </span>
}
const Star = React.memo(StarForMemo);

export const UncontrolledRating = React.memo(UncontrolledRatingForMemo);