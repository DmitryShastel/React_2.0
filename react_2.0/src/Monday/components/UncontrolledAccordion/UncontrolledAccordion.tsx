import React, {useReducer, useState} from 'react';

type AccordionType = {
    title: string
}


type ActionType = {
    type: string
}


const reducer = (state: boolean, action: ActionType) => {

    return state
}

export const UncontrolledAccordion = (props: AccordionType) => {

    let [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {/*<button onClick={() => {*/}
            {/*    setCollapsed(true)*/}
            {/*}}>*/}
            {/*</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )

}


type AccordionTitleType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h4 onClick={() => {
            props.onClick()
        }}>{props.title}</h4>
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