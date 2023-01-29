import React from 'react';

export type AccordionType2 = true | false

type AccordionType = {
    title: string
    collapsed: boolean
    onClick: (value: AccordionType2) => void
}

export const Accordion = (props: AccordionType) => {

    return (
        <div>
            <AccordionTitle title={props.title} />
            {props.collapsed === false && <AccordionBody/>}
        </div>
    )

}


type AccordionTitleType = {
    title: string
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h4 onClick={() => {}}>{props.title}</h4>
    )
}
const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}