import React from 'react';


export type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
    onClick?: (value: any) => void
    items?: {}
    color: string
}

export const Accordion = (props: AccordionType) => {

    return (
        <div>
            <AccordionTitle
                title={props.title}
                onChange={props.onChange}
                style={{color: props.color ? props.color : 'black'}}
            />
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
            <li>Dima</li>
            <li>Valera</li>
            <li>Artem</li>
        </ul>
    )
}