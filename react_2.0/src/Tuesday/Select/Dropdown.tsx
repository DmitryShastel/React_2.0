import React, {useEffect, useState} from 'react';
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

    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState<any>(null)

    const getDisplay = () => {
        if(selectedValue) {
            return selectedValue.value
        }
        return props.placeHolder
    }

    const onItemClick = (option: string) => {
        setSelectedValue(option)
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
                        <div key={option.value} className='dropdown-item'>{option.label}</div>
                    ))}
                </div>
            )}
        </div>
    );
};


