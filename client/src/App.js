import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import { Header, Footer } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { HomePage, IMac, MacBook, IPad, IPhone, Watch, CheckoutPage, CheckoutSummary, ShippingDetails } from './components';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/imac" component={IMac} />
            <Route path="/macbook" component={MacBook} />
            <Route path="/ipad" component={IPad} />
            <Route path="/iphone" component={IPhone} />
            <Route path="/watch" component={Watch} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/checkout/summary" component={CheckoutSummary} />
            <Route path="/checkout/details" component={ShippingDetails} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
