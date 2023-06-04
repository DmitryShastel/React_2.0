import {useState} from "react";


export default {
    title: 'input',
    //component: OnOff
}


export const UncontrolledInput = () => <input/>
export const ControlledInput = () => <input value={'it-incubator'}/>


export const TrackingValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    return (
        <><input onChange={(e) => {
            const actualValue = e.currentTarget.value
            setValue(actualValue)
        }}/>-{value}</>
    )
}



