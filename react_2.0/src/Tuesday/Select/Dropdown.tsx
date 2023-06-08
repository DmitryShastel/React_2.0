import React from 'react';
import {Icon} from "./Icon";
import "./Dropdown.css";


type PlaceHolderType = {
    placeHolder: any
    options?: OptionsType
}

type OptionsType = {
    value: string
    label: string
}

const options = [
    {value: 'green', label: "Green"},
    {value: 'green', label: "Green"},
    {value: 'green', label: "Green"},
]

export const Dropdown = (props: PlaceHolderType) => {

    const getDisplay = () => {
        return props.placeHolder
    }

    return (
        <div className="dropdown-container">
            <div className="dropdown-input">

                <div className="dropdown-menu">
                    {props.options.map((option) => {
                        <div key={option.value}>{option.label}</div>
                    })}
                </div>


            </div>
        </div>
    );
};