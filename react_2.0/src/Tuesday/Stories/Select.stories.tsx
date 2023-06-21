import React from 'react';
import {Select} from "../Select/Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}


export const BaseExample = () => <Select
    value={action('Value is selected')}
    onChange={() => {
    }}
    items={[
        {value: '1', title: "Minsk"},
        {value: '2', title: "Moscow"},
        {value: '3', title: "Kiev"},
    ]}/>   
