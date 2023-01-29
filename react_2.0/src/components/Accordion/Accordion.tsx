import React from 'react';


type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export const Accordion = (props: AccordionType) => {

    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {props.collapsed === false && <AccordionBody/>}
        </div>
    )

}


type AccordionTitleType = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h4 onClick={props.onChange}>{props.title}</h4>
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