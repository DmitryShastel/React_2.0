import React from 'react';

export const Accordion = (props: any) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}


const AccordionTitle = (props: any) => {
    return (
        <h4>{props.title}</h4>
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