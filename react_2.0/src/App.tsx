import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            {/*<Rating value={5}/>*/}
            <Accordion title={'Menu'} collapsed={true}/>
            {/*<Rating value={4}/>*/}
            <Accordion title={'Users'} collapsed={false}/>
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
