import React, {useState} from 'react';

type  RatingPropsType = {}


export const UncontrolledRating = (props: RatingPropsType) => {
    let [value, setvalue] = useState(4)

    return (
        <div>
            <Star selected={value > 0} setvalue={setvalue} value={0}/>
            <Star selected={value > 1} setvalue={setvalue} value={1}/>
            <Star selected={value > 2} setvalue={setvalue} value={2}/>
            <Star selected={value > 3} setvalue={setvalue} value={3}/>
            <Star selected={value > 4} setvalue={setvalue} value={4}/>
            <Star selected={value > 5} setvalue={setvalue} value={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    setvalue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
    value: 0 | 1 | 2 | 3 | 4 | 5
}

const Star = (props: StarPropsType) => {
    return <span onClick={() => {
        props.setvalue(props.value)
    }}>{props.selected ? <b>Star </b> : 'star '}</span>
}