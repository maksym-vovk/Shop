import React from 'react';
import './App.scss';
import { Header } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {HomePage} from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <HomePage/>
      </Router>
    </div>
  );
}

export default App;
