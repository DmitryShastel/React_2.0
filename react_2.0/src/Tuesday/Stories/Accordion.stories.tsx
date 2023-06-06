import React, {useState} from 'react';
import {Accordion, AccordionType} from "../../Monday/components/Accordion/Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionType> = (args) => <Accordion {...args}/>
const callbackProps = {
    onClick: onClickCallback,
    onChange: callback
}

export const MenuCollapsedMode2 = Template.bind({})
MenuCollapsedMode2.args = {
    title: 'test title',
    collapsed: true,
    ...callbackProps
}

export const UnCollapsedMode2 = Template.bind({})
UnCollapsedMode2.args = {
    title: 'test title',
    collapsed: false,
    ...callbackProps
}

export const CollapsedMode = () => <Accordion
    items={[]}
    title={'test title'}
    collapsed={true}
    onClick={onClickCallback}
    onChange={callback}/>

export const UnCollapsedMode = () => <Accordion
    items={[{title: 'Dima', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}]}
    title={'test title'}
    collapsed={false}
    onClick={onClickCallback}
    onChange={callback}/>


export const ModeChanging: Story<AccordionType> = (args) => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return <Accordion {...args} collapsed={accordionCollapsed}
                      onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                      onClick={(value) => {
                          alert(`user with id ${value} is clicked`)
                      }}
    />
}

ModeChanging.args = {
    title: 'Users',
    items: [{title: 'Dima', value: 1}, {title: 'Valera', value: 2}, {title: 'Artem', value: 3}],
    onClick: onClickCallback
}


