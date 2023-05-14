import {OnOff} from "../../Monday/components/On_Off/On_Off";
import {useState} from "react";


export default {
    title: 'OnOff',
    component: OnOff
}

export const OnMode = () => <OnOff on={true} onChange={x=>x}/>
export const OffMode = () => <OnOff on={false} onChange={x=>x}/>
export const CombinedMode = () => {

    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
        <OnOff on={switchOn} onChange={setSwitchOn}/>
    )
}