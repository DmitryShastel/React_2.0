import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <Rating value={3}/>
            <Accordion title={'Menu'}/>
            <Rating value={4}/>
            <Accordion title={'Users'}/>
        </div>

    );
}

const PageTitle = (props: any) => {
    return (
        <h4>{props.title}</h4>
    )
}





export default App;
