import {OnOff} from "../../Monday/components/On_Off/On_Off";
import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "../../Monday/components/UncontrolledOn_Off/On_Off";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>
export const CombinedMode = () => {

    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <OnOff on={switchOn} onChange={setSwitchOn}/>
    )
}