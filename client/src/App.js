import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import { Header, Footer } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import {
  HomePage,
  IMac,
  MacBook,
  IPad,
  IPhone,
  Watch,
  RegisterForm
} from './components';
import { ProductViewPage } from './components/ProductViewPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/imac" component={IMac} />
              <Route path="/macbook" component={MacBook} />
              <Route path="/ipad" component={IPad} />
              <Route path="/iphone" component={IPhone} />
              <Route exact path="/watch" component={Watch} />
              <Route path="/watch/:id" component={ProductViewPage} />
              <Route path="/sign_up" component={RegisterForm} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
