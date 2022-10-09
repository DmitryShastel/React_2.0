import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/accordion";
import {Rating} from "./components/Rating/rating";

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

const AppTitle = () => {
    return (
        <>This is APP component</>
    )
}





export default App;
