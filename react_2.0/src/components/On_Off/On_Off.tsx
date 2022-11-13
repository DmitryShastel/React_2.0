import React, {ChangeEvent} from 'react';

type OnOffType = {

}


export const OnOff = (props: OnOffType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: 'red'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: 'red',
    }

    return (
        <div>
           <div style={onStyle}>On</div>
           <div style={offStyle}>Off</div>
           <div style={indicatorStyle}></div>
        </div>
    );
};

