import React, {useEffect, useRef, useState} from "react";

import "./Dropdown.css";
import {CloseIcon, Icons} from "./Icons";


type OwnSelectType = {
    placeHolder: string
    options: OptionsType[]
    isMulti: boolean
    isSearchable: boolean
    onChange: (value: string | OptionsType[]) => void
}

export type OptionsType = {
    value: string
    label: string
}

export const OwnSelect = (props: OwnSelectType) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState<OptionsType[] | null>(props.isMulti ? [] : null);
    const [searchValue, setSearchValue] = useState<string>("");

    const searchRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu, searchRef]);
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    }, [inputRef]);

    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };
    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return props.placeHolder;
        }
        if (props.isMulti) {
            return (
                <div className="dropdown-tags">
                    {selectedValue.map((option) => (
                        <div key={option.value} className="dropdown-tag-item">
                            {option.label}
                            <span
                                onClick={(e) => onTagRemove(e, option)}
                                className="dropdown-tag-close"
                            >
                <CloseIcon/>
              </span>
                        </div>
                    ))}
                </div>
            );
        }
        return selectedValue && selectedValue.length > 0 ? selectedValue[0].label : props.placeHolder;
    };
    const removeOption = (option: OptionsType) => {
        return selectedValue!.filter((o) => o.value !== option.value);
    };
    const onTagRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: OptionsType) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        props.onChange(newValue);
    };
    const onItemClick = (option: OptionsType) => {
        let newValue: OptionsType[] | null;
        if (props.isMulti) {
            if (selectedValue!.findIndex((o) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue!, option];
            }
        } else {
            newValue = [option];
        }
        setSelectedValue(newValue);
        props.onChange(newValue);
    };
    const isSelected = (option: OptionsType) => {
        if (props.isMulti) {
            return selectedValue!.filter((o) => o.value === option.value).length > 0;
        }

        if (!selectedValue) {
            return false;
        }

        return selectedValue && selectedValue.length > 0 ? selectedValue[0].label : props.placeHolder;
    };
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    const getOptions = () => {
        if (!searchValue) {
            return props.options;
        }

        return props.options.filter(
            (option) =>
                option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
        );
    };

    return (
        <div className="dropdown-container">
            <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icons/>
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
                            className={`dropdown-item ${isSelected(option) && "selected"}`}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};