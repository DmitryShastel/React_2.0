import React, {useEffect, useRef, useState} from 'react';
import {CloseIcon, Icon} from "./Icon";
import "./Dropdown.css";


export type PlaceHolderType = {
    placeHolder: any
    options: OptionsType[]
    isMulti?: any
    isSearchable?: any
    onChange: (value: string) => void
}

export type OptionsType = {
    value: string
    label: string
}


export const Dropdown = (props: PlaceHolderType) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<any>(props.isMulti ? [] : null)
    const [searchValue, setSearchValue] = useState('')
    const searchRef: any = useRef();
    const inputRef: any = useRef();

    const removeOption = (option: any) => {
        return selectedValue.filter((o: any) => o.value !== option.value)
    }
    const onTagRemove = (e: any, option: any) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue)
        props.onChange(newValue);
    }
    const onItemClick = (option: any) => {
        let newValue;
        if (props.isMulti) {
            if (selectedValue.findIndex((o: any) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue, option]
            }
        } else {
            newValue = option
        }
        setSelectedValue(newValue)
        props.onChange(newValue);
    }
    const isSelected = (option: any) => {
        if (props.isMulti) {
            return selectedValue.filter((o: any) => o.value === option.value).length > 0
        }
        if (!selectedValue) {
            return false
        }

        return selectedValue.value === option.value
    }
    const onSearch = (e: any) => {
        setSearchValue(e.target.value)
    }
    const getOptions = () => {
        if (!searchValue) {
            return props.options
        }
        return props.options.filter((option: any) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
    }
    const handelInputClick = (e: any) => {
        setShowMenu(!showMenu)
    }
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


    useEffect(() => {
        const handel = (e: any) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener('click', handel);

        return () => {
            window.removeEventListener('click', handel);
        }
    })
    useEffect(() => {
        setSearchValue('');
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu])



    return (
        <div className="dropdown-container">
            <div ref={inputRef} onClick={handelInputClick} className="dropdown-input">
                <div className='dropdown-selected-value'>{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon/>
                    </div>
                </div>

            </div>

            {showMenu && (
                <div className="dropdown-menu">
                    {props.isSearchable && (
                        <div className="search-box">
                            <input onChange={onSearch} value={searchValue} ref={searchRef}/>
                        </div>
                    )}
                    {getOptions().map((option) => (
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