import React from 'react';
import { Provider } from 'react-redux';
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
  RegisterForm,
    CartPage,
  UserCabinet,

    CheckoutPage,
    ShippingDetailsForm,
    CheckoutItem,
    CheckoutPurchased,
} from './components';

import { ProductViewPage } from './components/ProductViewPage';

import './App.scss';


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
              <Route path="/cart" component={CartPage} />
              <Route path="/user_cabinet" component={UserCabinet} />

            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/checkout/shipping" component={ShippingDetailsForm} />
            <Route path="/checkout/purchased" component={CheckoutPurchased} />
            <Route path="/checkout/checkout_item" component={CheckoutItem} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
