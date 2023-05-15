import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "../../Monday/components/UncontrolledOn_Off/UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <UncontrolledOnOff  onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff on={false} onChange={callback}/>
export const CombinedMode = () => {

    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <UncontrolledOnOff on={switchOn} onChange={setSwitchOn}/>
    )
}