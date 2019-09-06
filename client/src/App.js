import React from 'react';
import {Provider} from 'react-redux';

import './App.scss';
import {Header, Footer} from './commons';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';
import {HomePage} from "./components/HomePage";


function App() {
  return (
   <Provider store={store}>
    <Router>
      <div className="App">
        <Header/>
        <HomePage/>
        <Footer/>
      </div>
    </Router>
   </Provider>
  );
}

export default App;
