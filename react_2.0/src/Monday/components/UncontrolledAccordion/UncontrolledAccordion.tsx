import React, {useReducer} from 'react';

type AccordionType = {
    title: string
}


type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}

const TOGGLE_CONSTANT = 'TOGGLE-COLLAPSED'

const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case TOGGLE_CONSTANT:
            state.collapsed = !state.collapsed
            return state
        default:
            throw new Error('Bad action type')
    }
    return state
}


export const UncontrolledAccordion = (props: AccordionType) => {

    let [collapsed, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.title} onClick={() => {
                dispatch({type: TOGGLE_CONSTANT})
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