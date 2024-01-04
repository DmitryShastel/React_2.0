import React, {useEffect, useState} from 'react';

export const Clock = () => {

    const clockStyle = {
        textAlign:'center',
        width: '350px',
        border: '2px solid green',
        borderRadius: '5px',
        fontFamily:'sans-serif',
        fontSize: '50px',
        margin: '50px',
        background:'#2F4F4F',
        color:'#00FFFF',
    }


    const [date, setData] = useState(new Date())


    const getTwoDigitString = (num: number) => num < 10 ? '0' + num : num
    const format = date.getHours() < 10 ? 'AM' : 'PM'

    useEffect(() => {
        let time=  setInterval(() => {
            setData(new Date())
        }, 500)
        return ()=> clearInterval(time)
    })


    return (
        //@ts-ignore
        <div style={clockStyle}>
            <span>{getTwoDigitString(date.getHours())}</span>:
            <span>{getTwoDigitString(date.getMinutes())}</span>:
            <span>{getTwoDigitString(date.getSeconds())}</span>
            <span>{' ' + format}</span>
        </div>
    );
};