import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <AppTitle/>
            <Reating/>
            <Accordion/>
        </div>
    );
}

const AppTitle = () => {
    return (
        <>This is APP component</>
    )
}

const Reating = () => {
    return (
        <div>
            <Star/>
        </div>
    )
}

const Star = () => {
    return (
        <div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
            <div>Star</div>
        </div>
    )
}

const Accordion = () => {
    return (
        <div>
            <h4>Menu</h4>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default App;
