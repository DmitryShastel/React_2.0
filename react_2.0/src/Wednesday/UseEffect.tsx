import React, {useEffect, useState} from 'react';

export const UseEffectComponent = () => {
    console.log('UseEffectComponent')

    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('UseEffect')
    })


    return (
        <div>
            Hello, {counter}
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};