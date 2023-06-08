import React from 'react';
import {Icon} from "./Icon";


type PlaceHolderType = {
    placeHolder: any
}

//@ts-ignore
export const Dropdown = (props: PlaceHolderType) => {

    const getDisplay = () => {
        return props.placeHolder
    }

    return (
        <div className="dropdown-container">
            <div className="dropdown-input">
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon/>
                    </div>
                </div>
            </div>
        </div>
    );
};


