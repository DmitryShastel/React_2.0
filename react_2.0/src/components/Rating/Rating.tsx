import React, {useState} from 'react';

type  RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}



export const UncontrolledRating = (props: RatingType) => {
    let [value, setvalue] = useState(4)

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
            <Star selected={props.value > 5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    return <span>{props.selected ? <b>Star</b> : 'star'}</span>
}
