import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating value={3}/>
            <Accordion/>
            <Rating value={4}/>
        </div>
    );
}

const AppTitle = () => {
    return (
        <h3>This is APP component</h3>
    )
}





export default App;
