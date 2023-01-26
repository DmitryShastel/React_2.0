import React, {useState} from 'react';

type  RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}


export const UncontrolledRating = (props: RatingType) => {

    let [value, setValue] = useState(0);
    return (
        <div>
            <Star selected={value > 0} setValue={() => {setValue(1)}} value={1}/>
            <Star selected={value > 1} setValue={() => {setValue(2)}} value={2}/>
            <Star selected={value > 2} setValue={() => {setValue(3)}} value={3}/>
            <Star selected={value > 3} setValue={() => {setValue(4)}} value={4}/>
            <Star selected={value > 4} setValue={() => {setValue(5)}} value={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: 0 | 1 | 2 | 3 | 4 | 5
    setValue: (value: 0 | 1 | 2 | 3 | 4 | 5) => void
}

const Star = (props: StarPropsType) => {

    return <span onClick={() => {
        props.setValue(props.value)
    }}>
    {props.selected ? <b> Star </b> : 'star '}
    </span>
}
