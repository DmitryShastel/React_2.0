import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
    //component: OnOff
}


export const UncontrolledInput = () => <input/>
export const ControlledInput2 = () => <input value={'it-incubator'}/>


export const TrackingValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return (
        <><input onChange={onChange}/>-{value}</>
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


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {

    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {

}



