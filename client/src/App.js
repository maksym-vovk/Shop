import React from 'react';
import {Provider} from 'react-redux';

import './App.scss';
import { Header } from './commons';
import {RegisterForm} from './components';
import store from './store'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>

        <div className="App">
          <Header/>

          <Switch>
            <Route exact path="/" />
            <Route path="/registration" component={RegisterForm} />
          </Switch>
        </div>

      </Router>
    </Provider>

  );
}

export default App;
