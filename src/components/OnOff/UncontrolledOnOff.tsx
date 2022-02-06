    import React, {useState} from "react";


function UncontrolledOnOffForMemo() {
    let [on, setOn] = useState(false);

    const onOffWrapperStyle = {
        display: "flex",
        alignItems: "center",
        marginTop: "30px",
        // textAlign: "center"
    };
    const onStyle = {
        width: "75px",
        height: "35px",
        marginRight: "2px",
        border: "solid 1px #000",
        paddingTop: "7px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "75px",
        height: "35px",
        border: "solid 1px #000",
        paddingTop: "7px",
        backgroundColor: !on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        border: "solid 1px #000",
        marginLeft: "20px",
        backgroundColor: !on ? "red" : "green"
    };

    return (
        <div style={onOffWrapperStyle}>
            <div style={onStyle} onClick={() => {setOn(true)}}>ON</div>
            <div style={offStyle} onClick={() => {setOn(false)}}>OFF</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}
export const UncontrolledOnOff = React.memo(UncontrolledOnOffForMemo);