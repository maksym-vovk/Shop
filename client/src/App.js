import React from 'react';
import { Provider } from 'react-redux';
import { Header, Footer } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import store from './store';
import { HomePage, IMac, MacBook, IPad, IPhone, Watch, RegisterForm, Cart } from './components';

import './App.scss';

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
