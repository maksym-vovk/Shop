import React from 'react';
import './App.scss';
import {Header} from './commons';
import {HomePageSlider} from "./components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
            </Router>
            <HomePageSlider/>
        </div>
    );
}

export default App;
