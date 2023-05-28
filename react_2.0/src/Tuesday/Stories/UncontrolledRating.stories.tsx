import React, {useState} from 'react';
import {Rating, RatingValueType} from "../../Monday/components/Rating/Rating";
import {UncontrolledRating} from "../../Monday/components/UncontrolledRating/UncontrolledRating";

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
}

export const EmptyRating = () => <UncontrolledRating />
// export const Rating1 = () => <UncontrolledRating value={1} onClick={x => x}/>
// export const Rating2 = () => <UncontrolledRating value={2} onClick={x => x}/>
// export const Rating3 = () => <UncontrolledRating value={3} onClick={x => x}/>
// export const Rating4 = () => <UncontrolledRating value={4} onClick={x => x}/>
// export const Rating5 = () => <UncontrolledRating value={5} onClick={x => x}/>

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)
    return <Rating value={rating} onClick={setRating}/>
}
