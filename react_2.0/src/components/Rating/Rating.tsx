import React, {useState} from 'react';

type  RatingPropsType = {

}



export const UncontrolledRating = (props: RatingPropsType) => {
    let [value, setvalue] = useState(4)

    return (
        <div>
            <Star selected={value > 0}/>
            <Star selected={value > 1}/>
            <Star selected={value > 2}/>
            <Star selected={value > 3}/>
            <Star selected={value > 4}/>
            <Star selected={value > 5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    return <span>{props.selected ? <b>Star</b> : 'star'}</span>
}
