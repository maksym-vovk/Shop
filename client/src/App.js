import React from 'react';
import './App.scss';

import {Header, Footer} from './commons';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomePage} from "./components/HomePage";
import {HomePageSlider} from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <HomePageSlider/>
        <HomePage/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
