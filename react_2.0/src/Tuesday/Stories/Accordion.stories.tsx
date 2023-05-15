import React, {useState} from 'react';
import {Accordion, AccordionType} from "../../Monday/components/Accordion/Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}


export const CollapsedMode  = () => <Accordion title={'test title'} collapsed={true} onChange={()=> {}}/>
export const UncollapsedMode  = () => <Accordion title={'test title'} collapsed={false} onChange={()=> {}}/>

export const CombinedAccordion = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<any>(false)

    return <Accordion title={'test title'} collapsed={accordionCollapsed} onChange={()=> setAccordionCollapsed(!accordionCollapsed)}/>


}

