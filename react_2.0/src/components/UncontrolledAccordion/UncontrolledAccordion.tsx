import React from 'react';

type AccordionType = {
    title: string
}

export const UncontrolledAccordion = (props: AccordionType) => {

    let collapsed = true

    return (
        <div>
            <AccordionTitle title={props.title}/>
            {collapsed && <AccordionBody/>}
        </div>
    )

}


type AccordionTitleType = {
    title: string
}

const AccordionTitle = (props: AccordionTitleType) => {
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