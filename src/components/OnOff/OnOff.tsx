import React from "react";

type onOffType = {
    on: boolean
    onClick: (on: boolean) => void
}

function OnOffForMemo(props: onOffType) {

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
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        width: "75px",
        height: "35px",
        border: "solid 1px #000",
        paddingTop: "7px",
        backgroundColor: !props.on ? "red" : "white"
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        border: "solid 1px #000",
        marginLeft: "20px",
        backgroundColor: !props.on ? "red" : "green"
    };

    const onClicked = () => props.onClick(true)
    const offClicked = () => props.onClick(false)

    return (
        <div style={onOffWrapperStyle}>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
            <div style={indicatorStyle}> </div>
        </div>
    )
}
export const OnOff = React.memo(OnOffForMemo);