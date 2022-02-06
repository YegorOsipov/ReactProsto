import React from "react";

export type AccordionPropsType = {
    titleValue: string
    onClick: (v: boolean) => void
    collapsed: boolean
}

const accordionTitleClass = {
    cursor: 'pointer'
}

function AccordionForMemo(props: AccordionPropsType) {
    console.log('Accordion rendered');

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => props.onClick(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}
export const Accordion = React.memo(AccordionForMemo);

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleForMemo(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered');
    return (
        <h3 style={accordionTitleClass} onClick={() => props.onClick()}>{props.title}</h3>
    );
}
const AccordionTitle = React.memo(AccordionTitleForMemo);

function AccordionBodyForMemo() {
    console.log('AccordionBody rendered');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
const AccordionBody = React.memo(AccordionBodyForMemo);

