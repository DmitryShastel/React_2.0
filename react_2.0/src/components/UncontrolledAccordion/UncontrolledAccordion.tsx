import React, {useState} from 'react';

type AccordionType = {
    title: string
}

export const UncontrolledAccordion = (props: AccordionType) => {

    let [collapsed, setcollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => {
                setcollapsed(!collapsed)
            }}/>
            <button onClick={() => {
                setcollapsed(true)
            }}>TOGLE_ON
            </button>
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
        <h4 onClick={() => {props.onClick()}}>{props.title}</h4>
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