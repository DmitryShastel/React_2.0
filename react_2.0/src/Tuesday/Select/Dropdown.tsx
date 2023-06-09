import React, {useEffect, useState} from 'react';
import {CloseIcon, Icon} from "./Icon";
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
        if (!selectedValue || selectedValue.length === 0) {
            return props.placeHolder
        }
        if (props.isMulti) {
            return (
                <div className="dropdown-tags">
                    {
                        selectedValue.map((option: any) => (
                            <div key={option.value} className="dropdown-tag-item">
                                {option.label}
                                <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close">
                                    <CloseIcon/>
                                </span>
                            </div>
                        ))
                    }
                </div>
            )
        }
        return selectedValue.label;
    }


    const removeOption = (option: any) => {
        return selectedValue.filter((o: any) => o.value !== option.value)
    }

    const onTagRemove = (e: any, option: any) => {
        e.stopPropagation();
        selectedValue(removeOption(option))
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


