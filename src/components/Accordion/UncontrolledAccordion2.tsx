import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

const accordionTitleClass = {
    cursor: 'pointer'
}

function UncontrolledAccordionForMemo(props: AccordionPropsType) {
    console.log('Accordion rendered');
    let [collapsed, setCollapsed] = useState<boolean>(true);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionForMemo);

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleForMemo(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered');
    return (
        <h3 onClick={() => props.onClick()} style={accordionTitleClass}>{props.title}</h3>
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
