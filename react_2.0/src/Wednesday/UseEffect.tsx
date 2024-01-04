import React, { useEffect, useState } from 'react';

export const UseEffectComponent = () => {
    const [currentTime, setCurrentTime] = useState('');

    const startTime = () => {
        let today = new Date();
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();

        let ap = (hr < 12) ? "AM" : "PM";
        hr = (hr === 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;

        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);

        setCurrentTime(`${hr}:${min}:${sec} ${ap}`);

       setTimeout(function () {
            startTime();
        }, 500);
    };

    function checkTime(i: any) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    useEffect(() => {
        startTime();
    }, []);

    return (
        <div>
            {currentTime}
        </div>
    );
};