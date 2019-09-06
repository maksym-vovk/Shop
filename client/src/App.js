import React from 'react';
import './App.scss';
import {Header, Footer} from './commons';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HomePage, Cart } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/cart' component={Cart} />
          <Route path='/sig_in'/>
          <Route path='/sig_up'/>
        </Switch>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
