import React from 'react';


export type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
    onClick?: (value: any) => void
    items: string[]
    color?: string
}

export const Accordion = (props: AccordionType) => {

    return (
        <div>
            <AccordionTitle
                title={props.title}
                onChange={props.onChange}
                color={props.color}
            />
            {props.collapsed === false && <AccordionBody items={props.items}/>}
        </div>
    )

}


type AccordionTitleType = {
    title: string
    onChange: () => void
    color?: string
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h4
            style={{color: props.color ? props.color : 'black'}}
            onClick={props.onChange}>{props.title}</h4>
    )
}

export type BodyPropsType = {
    items: string[]
}

const AccordionBody = (props: BodyPropsType) => {
    return <ul>
        {
            props.items.map((i, index) => <li key={index}>{i}</li>)
        }
    </ul>

    // <ul>
    //     <li>Dima</li>
    //     <li>Valera</li>
    //     <li>Artem</li>
    // </ul>

}