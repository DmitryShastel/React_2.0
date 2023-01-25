import React from 'react';
import './App.css';
import {OnOff} from "./components/On_Off/On_Off";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <OnOff/>



            <UncontrolledAccordion title={'Menu'}/>
            <UncontrolledRating/>
            <UncontrolledAccordion title={'Users'}/>

            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<Accordion title={'Menu'} collapsed={true}/>*/}
            {/*<Accordion title={'Users'} collapsed={false}/>*/}


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
