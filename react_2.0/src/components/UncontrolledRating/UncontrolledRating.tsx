import React, {useState} from 'react';

type  RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}


export const UncontrolledRating = (props: RatingType) => {

    let [value, setValue] = useState(0);
    return (
        <div>
            <Star selected={props.value > 0} setValue={() => {setValue(1)}}/>
            <Star selected={props.value > 1} setValue={() => {setValue(2)}}/>
            <Star selected={props.value > 2} setValue={() => {setValue(3)}}/>
            <Star selected={props.value > 3} setValue={() => {setValue(4)}}/>
            <Star selected={props.value > 4} setValue={() => {setValue(5)}}/>
        </div>
    )
}


type StarType = {
    selected: boolean
}

const Star = (props: StarType) => {
    if (props.selected === true) {
        return <span><b> Star </b></span>
    } else {
        return <span> Star </span>
    }
}
