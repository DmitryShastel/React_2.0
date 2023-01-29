import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    return (
        <div className="App">

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <Accordion title={'Menu'} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>

            {/*<UncontrolledAccordion title={'Menu'}/>*/}
            {/*<UncontrolledAccordion title={'Users'}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<Accordion title={'Users'} collapsed={false}/>*/}
            {/*<OnOff/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>

    );
}


type PageTitleType = {
    title: string
}

const PageTitle = (props: PageTitleType) => {
    return (
        <h4>{props.title}</h4>
    )
}


export default App;
