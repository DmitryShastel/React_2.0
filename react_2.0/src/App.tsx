import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <h3>This is APP component</h3>
            <Reating/>
            <Accordion/>
        </div>
    );
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
