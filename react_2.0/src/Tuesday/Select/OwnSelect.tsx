import React, { useEffect, useRef, useState } from "react";

import "./Dropdown.css";
import {CloseIcon} from "./Icons";
import {Icon} from "@material-ui/core";



type OwnSelectType = {
    placeHolder: any
    options: OptionsType
    isMulti: any
    isSearchable: any
    onChange: any
}

type OptionsType = {
    value: any
    label: any
}

export const OwnSelect = (props: OwnSelectType) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(props.isMulti ? [] : null);
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        const handler = (e: any) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });
    const handleInputClick = (e: any) => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            return props.placeHolder;
        }
        if (props.isMulti) {
            return (
                <div className="dropdown-tags">
                    {selectedValue.map((option: any) => (
                        <div key={option.value} className="dropdown-tag-item">
                            {option.label}
                            <span
                                onClick={(e) => onTagRemove(e, option)}
                                className="dropdown-tag-close"
                            >
                <CloseIcon />
              </span>
                        </div>
                    ))}
                </div>
            );
        }
        return selectedValue.label;
    };

    const removeOption = (option: any) => {
        return selectedValue.filter((o: any) => o.value !== option.value);
    };

    const onTagRemove = (e: any, option: any) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        props.onChange(newValue);
    };

    const onItemClick = (option: any) => {
        let newValue;
        if (props.isMulti) {
            if (selectedValue.findIndex((o: any) => o.value === option.value) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue, option];
            }
        } else {
            newValue = option;
        }
        setSelectedValue(newValue);
        props.onChange(newValue);
    };

    const isSelected = (option: any) => {
        if (props.isMulti) {
            return selectedValue.filter((o: any) => o.value === option.value).length > 0;
        }

        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === option.value;
    };

    const onSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }

        return options.filter(
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
                        <Icon />
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className="dropdown-menu">
                    {isSearchable && (
                        <div className="search-box">
                            <input onChange={onSearch} value={searchValue} ref={searchRef} />
                        </div>
                    )}
                    {getOptions().map((option: any) => (
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