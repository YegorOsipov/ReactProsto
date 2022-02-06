import React from "react";

type pagePropsType = {
    title: string
}

function PageTitleForMemo(props: pagePropsType) {
    console.log('AppTitle rendered');
    return (
        <h1>{props.title}</h1>
    );
}
export const PageTitle = React.memo(PageTitleForMemo);