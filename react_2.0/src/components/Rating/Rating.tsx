import React, {useState} from 'react';

type  RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}



export const UncontrolledRating = (props: RatingType) => {
    let [value, setvalue] = useState(true)

    return (
        <div>
            <Star selected={props.value > 0}/><button>1</button>
            <Star selected={props.value > 1}/><button>2</button>
            <Star selected={props.value > 2}/><button>3</button>
            <Star selected={props.value > 3}/><button>4</button>
            <Star selected={props.value > 4}/><button>5</button>
            <Star selected={props.value > 5}/><button>6</button>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    return props.selected ? <span><b> Star </b></span> : <span> Star </span>
}
