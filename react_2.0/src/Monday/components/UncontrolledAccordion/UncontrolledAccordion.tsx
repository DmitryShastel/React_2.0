import React, {useReducer} from 'react';




type AccordionType = {
    title: string
}


type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        default:
            throw new Error('Bad action type')
    }
    return state
}


export const UncontrolledAccordion = (props: AccordionType) => {

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.title} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>
            {/*<button onClick={() => {*/}
            {/*    setCollapsed(true)*/}
            {/*}}>*/}
            {/*</button>*/}
            {!state.collapsed && <AccordionBody/>}
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