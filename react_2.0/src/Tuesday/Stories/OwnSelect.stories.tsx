import React from 'react';
import {OptionsType, OwnSelect} from "../Select/OwnSelect";


export default {
    title: 'OwnSelect',
    component: OwnSelect
}

const options: OptionsType[] = [
    { value: 'green1', label: 'Green' },
    { value: 'green2', label: 'Red' },
    { value: 'green3', label: 'Yellow' },
];


export const SingleSelect = () => (
    <OwnSelect
        placeHolder="Select value"
        options={options}
        isMulti={false}
        isSearchable={true}
        onChange={(value) => console.log(value)}
    />
);

export const MultiSelect = () => (
    <OwnSelect
        placeHolder="Select value"
        options={options}
        isMulti={true}
        isSearchable={true}
        onChange={(value) => console.log(value)}
    />
);

