import React from 'react';
import {OptionsType, OwnSelect} from "./OwnSelect";

export const SelectApp = () => {
    const options: OptionsType[] = [
        {value: 'green1', label: "Green"},
        {value: 'green2', label: "Red"},
        {value: 'green3', label: "Yellow"},
    ]

    const handleChange = (value: string | OptionsType[]) => {
        console.log(value)
    }

    return (
        <div className="App">
            <OwnSelect
                placeHolder='Select...'
                options={options}
                isMulti={true}
                isSearchable={true}
                onChange={handleChange}
            />
        </div>
    );
};