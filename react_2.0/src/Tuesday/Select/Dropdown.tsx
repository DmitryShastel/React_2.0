import React, {useEffect, useState} from 'react';
import {Icon} from "./Icon";
import "./Dropdown.css";


type PlaceHolderType = {
    placeHolder: any
    options: OptionsType[]
    isMulti: []
}

type OptionsType = {
    value: string
    label: string
}


export const Dropdown = (props: PlaceHolderType) => {

    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState<any>(props.isMulti ? [] : null)

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.value
        }
        return props.placeHolder
    }



    const onItemClick = (option: any) => {
        setSelectedValue(option)
    }
    const isSelected = (option: any) => {
        if (!selectedValue) {
            return false
        }

        return selectedValue.value === option.value
    }

    useEffect(() => {
        const handel = () => setShowMenu(false);

        window.addEventListener('click', handel);

        return () => {
            window.removeEventListener('click', handel);
        }
    })
    const handelInputClick = (e: any) => {
        e.stopPropagation();
        setShowMenu(!showMenu)
    }

    return (
        <div className="dropdown-container">
            <div onClick={handelInputClick} className="dropdown-input">
                <div className='dropdown-selected-value'>{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon/>
                    </div>
                </div>

            </div>

            {showMenu && (
                <div className="dropdown-menu">
                    {props.options.map((option) => (
                        <div
                            onClick={() => onItemClick(option)}
                            key={option.value}
                            className={`dropdown-item ${isSelected(option) && 'selected'}`}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};


