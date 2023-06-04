import {OnOff} from "../../Monday/components/On_Off/On_Off";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'input',
    //component: OnOff
}


export const UncontrolledInput = () => <input/>
export const ControlledInput = () => <input value={'it-incubator'}/>
