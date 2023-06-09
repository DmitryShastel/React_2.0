import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Monday/components/Rating/Rating";
import {UncontrolledRating} from "./Monday/components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./Monday/components/Accordion/Accordion";
import {UncontrolledOnOff} from "./Monday/components/UncontrolledOn_Off/UncontrolledOnOff";
import {OnOff} from "./Monday/components/On_Off/On_Off";
import {UncontrolledAccordion} from "./Monday/components/UncontrolledAccordion/UncontrolledAccordion";
import {MyComponent, Select} from "./Tuesday/Select/Select";
import {Dropdown} from "./Tuesday/Select/Dropdown";



function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    const options = [
        {value: 'green1', label: "Green1"},
        {value: 'green2', label: "Green2"},
        {value: 'green3', label: "Green3"},
    ]

    return (
        <div className="App">


            <Dropdown placeHolder='Select...' options={options} />

            {/*<Accordion*/}
            {/*    title={'Menu'}*/}
            {/*    items={[]}*/}
            {/*    onClick={() => {}}*/}
            {/*    collapsed={accordionCollapsed}*/}
            {/*    onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            {/*<UncontrolledRating/>*/}
            {/*<UncontrolledOnOff on={switchOn} onChange={setSwitchOn}/>*/}
            {/*<Accordion title={'Users'} collapsed={false} onChange={() => {}}/>*/}
            {/*<UncontrolledAccordion title={'Menu'}/>*/}
            {/*<UncontrolledAccordion title={'Users'}/>*/}
            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<OnOff on={true} onChange={setSwitchOn}/>*/}
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
