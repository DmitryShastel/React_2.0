import {useRef, useState} from "react";


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

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <><input ref={inputRef}/>
            <button onClick={save}> Save</button>
            - actual value: {value}</>
    )
}



