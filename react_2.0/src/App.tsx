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
        </div>

    );
}

const PageTitle = (props: any) => {
    return (
        <h3>{props.title}</h3>
    )
}





export default App;
