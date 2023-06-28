import React, {useState} from 'react';

export default {
    title: 'React.memo',
}


export const Example1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    for (let i = 1; i <= a; i++) {
        resultA = resultA * i
    }
    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result a: {a}
        </div>
        <div>
            Result b: {b}
        </div>
    </>
}