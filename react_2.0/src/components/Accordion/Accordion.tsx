import React from 'react';

type AccordionType = {
    title: string
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {


    return (
        <div>
            <AccordionTitle title={props.title}/>
            {props.collapsed === false && <AccordionBody/>}
        </div>
    )

}

export const Accordion2 = (props: AccordionType) => {

    if (props.collapsed == true) {
        return (
            <div>
                <AccordionTitle title={props.title}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.title}/>
            </div>
        )
    }
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