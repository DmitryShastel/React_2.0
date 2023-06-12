import React, {useEffect, useRef, useState} from 'react';
import {CloseIcon, Icon} from "./Icon";
import "./Dropdown.css";


export type PlaceHolderType = {
    placeHolder: string
    options: OptionsType[]
    isMulti: boolean
    isSearchable: boolean
    onChange: (value: any) => void
}

export type OptionsType = {
    value: string
    label: string
}


export const Dropdown = (props: PlaceHolderType) => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [selectedValue, setSelectedValue] = useState<OptionsType[] | null>(props.isMulti ? [] : null)
    const [searchValue, setSearchValue] = useState<string>('')
    const searchRef = useRef<HTMLInputElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const removeOption = (options: OptionsType[]) => {
        const valuesToRemove = options.map((option) => option.value)
        return selectedValue?.filter((o) => !valuesToRemove.includes(o.value)) || []
    }
    const onTagRemove = (e: React.MouseEvent<HTMLSpanElement>, option: OptionsType) => {
        e.stopPropagation();
        const newValue = removeOption([option]);
        setSelectedValue(newValue)
        props.onChange(newValue);
    }
    const onItemClick = (option: OptionsType | OptionsType[]) => {
        let newValue;
        if (props.isMulti) {
            const options = Array.isArray(option) ? option : [option]

            if (options.some((o) => selectedValue?.findIndex((sv) => sv.value === o.value) === -1)) {
                newValue = [...(selectedValue || []), ...options]
            } else {
                newValue = (selectedValue || []).filter((sv) => !options.some((o) => o.value === sv.value));
            }
        } else {
            newValue = option
        }
        setSelectedValue(Array.isArray(newValue) ? newValue : [newValue])
        props.onChange(newValue);
    }


    const isSelected = (option: OptionsType) => {
        if (props.isMulti) {
            return !!selectedValue?.some((o) => o.value === option.value)
        }
        if (!selectedValue) {
            return false
        }
        //@ts-ignore
        return selectedValue.value === option.value
    }


    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    const getOptions = () => {
        if (!searchValue) {
            return props.options
        }
        return props.options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
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
        return selectedValue[0] ? selectedValue[0]?.label : props.placeHolder;
    }


    useEffect(() => {
        const handel = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
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