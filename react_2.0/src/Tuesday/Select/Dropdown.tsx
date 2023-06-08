import React from 'react';
import {Icon} from "./Icon";
import "./Dropdown.css";


type PlaceHolderType = {
    placeHolder: any
    options: OptionsType[]
}

type OptionsType = {
    value: string
    label: string
}


export const Dropdown = (props: PlaceHolderType) => {

    const getDisplay = () => {
        return props.placeHolder
    }

    return (
        <div className="dropdown-container">
            <div className="dropdown-input">
                <div className='dropdown-selected-value'>{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon/>
                    </div>
                </div>

            </div>

            <div className="dropdown-menu">
                {props.options.map((option) => (
                    <div key={option.value} className='dropdown-item'>{option.label}</div>
                ))}
            </div>
        </div>

    );
};


