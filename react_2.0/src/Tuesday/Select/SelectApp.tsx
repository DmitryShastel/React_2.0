import React from 'react';
import {OwnSelect} from "./OwnSelect";

export const SelectApp = () => {
    const options: any = [
        {value: 'green1', label: "Green"},
        {value: 'green2', label: "Red"},
        {value: 'green3', label: "Yellow"},
    ]

    const handleChange = (value: string) => {
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