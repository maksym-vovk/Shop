import React from 'react';
import { Provider } from 'react-redux';
import { Header, Footer } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { HomePage, IMac, MacBook, IPad, IPhone, Watch, CheckoutPage, ShippingDetails, CheckoutItemDetails, CheckoutItem, CheckoutPurchased, RegisterForm, Cart } from './components';

import './App.scss';


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
            <Route path="/checkout/shipping" component={ShippingDetails} />
            <Route path="/checkout/checkout_item_details" component={CheckoutItemDetails} />
            <Route path="/checkout/checkout-purchased" component={CheckoutPurchased} />
            <Route path="/cart" component={Cart} />
            <Route path="/sign_up" component={RegisterForm} />
            <Route path="/checkout/checkout_item" component={CheckoutItem} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
