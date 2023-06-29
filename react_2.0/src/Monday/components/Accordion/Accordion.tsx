import React from 'react';


export type ItemType = {
    title: string
    value: any
}

export type AccordionType = {
    title: string
    collapsed: boolean
    onChange: () => void
    onClick: (value: any) => void
    items: ItemType[]
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
            {props.collapsed === false && <AccordionBody items={props.items} onClick={props.onClick}/>}
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
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionBody = (props: BodyPropsType) => {
    return <ul>
        {
            props.items.map((i, index) => <li onClick={props.onClick} key={index}>{i.title}</li>)
        }
    </ul>
}