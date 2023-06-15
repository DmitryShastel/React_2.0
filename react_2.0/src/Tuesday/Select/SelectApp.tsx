import React from 'react';
import {OptionsType, OwnSelect} from "./OwnSelect";

export const SelectApp = () => {
    const options: OptionsType[] = [
        {value: 'green1', label: "Green"},
        {value: 'green2', label: "Red"},
        {value: 'green3', label: "Yellow"},
    ]

    const handleChange = (value: string | OptionsType[]) => {
        console.log(value)
    }

    return (
        <div className="App">
            <OwnSelect
                //параметр, определяющий текст заголовка выпадающего списка.
                placeHolder='Select...'
                //параметр, определяющий массив опций.
                options={options}
                //параметр, определяющий возможность выбора нескольких опций.
                isMulti={true}
                //параметр, определяющий возможность поиска опций.
                isSearchable={true}
                //параметр, определяющий функцию для обработки изменений в списке
                onChange={handleChange}
            />
        </div>
    );
};