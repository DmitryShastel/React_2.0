import React, {useState} from 'react';
import {Accordion, AccordionType} from "../../Monday/components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')


export const CollapsedMode  = () => <Accordion title={'test title'} collapsed={true} onChange={callback}/>
export const UncollapsedMode  = () => <Accordion title={'test title'} collapsed={false} onChange={()=> {}}/>

export const CombinedAccordion = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return <Accordion title={'test title'} collapsed={accordionCollapsed} onChange={()=> setAccordionCollapsed(!accordionCollapsed)}/>


}

