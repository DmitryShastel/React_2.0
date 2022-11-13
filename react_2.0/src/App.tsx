import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/On_Off/On_Off";

function App() {
    return (
        <div className="App">
            <OnOff/>

            {/*<PageTitle title={'This is APP component'}/>*/}
            {/*<Accordion title={'Menu'} collapsed={true}/>*/}
            {/*<Accordion title={'Users'} collapsed={false}/>*/}

            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}


        </div>

    );
}

const turnOn = (event: React.FormEvent<HTMLFormElement>) =>{
    
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
