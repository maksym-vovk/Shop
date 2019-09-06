import React from 'react';
import './App.scss';
import {Header, Footer} from './commons';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomePage} from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <HomePage/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
