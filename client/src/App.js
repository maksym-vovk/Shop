import React from 'react';
import './App.scss';
import { Header } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
            <Header/>
        </Router>
    </div>
  );
}

export default App;
