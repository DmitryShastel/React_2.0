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
    //создание состояния showMenu, которое определяет, отображается ли выпадающий список.
    const [showMenu, setShowMenu] = useState<boolean>(false);
    //создание состояния selectedValue, которое определяет выбранные опции в списке
    const [selectedValue, setSelectedValue] = useState<OptionsType[] | null>(props.isMulti ? [] : null);
    //создание состояния searchValue, которое определяет значение поискового запроса.
    const [searchValue, setSearchValue] = useState<string>("");

    //создание ссылки searchRef на элемент ввода поискового запроса.
    const searchRef = useRef<HTMLInputElement>(null);
    //создание ссылки inputRef на элемент ввода списка.
    const inputRef = useRef<HTMLInputElement>(null);

    //обновляет состояние searchValue и фокусирует элемент поиска приоткрытии выпадающего списка.
    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }

    }, [showMenu, searchRef]);
    //добавляет обработчик клика и удаляет его после использования.
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

    //обрабатывает клики на элемент списка.
    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };
    //определяет, какие элементы должны отображаться в списке.
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

    //функция, которая удаляет опцию из выбранных.
    const removeOption = (option: OptionsType) => {
        return selectedValue!.filter((o) => o.value !== option.value);
    };
    //обрабатывает удаление выбранной опции из списка
    const onTagRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: OptionsType) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        props.onChange(newValue);
    };

    //обрабатывает клики на опции в списке
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
    //определяет, выбрана ли опция в списке.
    const isSelected = (option: OptionsType) => {
        if (props.isMulti) {
            return selectedValue!.filter((o) => o.value === option.value).length > 0;
        }

        if (!selectedValue) {
            return false;
        }

        return selectedValue && selectedValue.length > 0 ? selectedValue[0].label : props.placeHolder;
    };

    //обрабатывает изменения поискового запроса.
    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };
    //определяет, какие опции должны отображаться в списке.
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