import React from 'react';
import { Provider } from 'react-redux';
import { Header, Footer } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store, { setUser } from './store';

import {
  HomePage,
  All,
  Hermes,
  Origin,
  Nike,
  Edition,
  RegisterForm,
  CartPage,
  UserCabinet,

  CheckoutPage,
  ShippingDetailsForm,
  CheckoutItem,
  CheckoutPurchased,

  ChangeUserInfoPage,
  ChangeUserPasswordPage,
  Page404,
  SearchResult
} from './components';

import { ProductViewPage } from './components/ProductViewPage';

import './App.scss';

function App() {
  if (localStorage.userData) {
    store.dispatch(setUser(JSON.parse(localStorage.userData)))
  }
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />

          <main className="main-content">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/all" component={All} />
              <Route path="/origin" component={Origin} />
              <Route path="/nike" component={Nike} />
              <Route path="/hermes" component={Hermes} />
              <Route path="/edition" component={Edition} />
              <Route path="/all/:id" component={ProductViewPage} />
              <Route path="/sign_up" component={RegisterForm} />
              <Route path="/cart" component={CartPage} />
              <Route path="/user_cabinet" component={UserCabinet} />

              <Route exact path="/checkout" component={CheckoutPage} />
              <Route path="/checkout/shipping" component={ShippingDetailsForm} />
              <Route path="/checkout/purchased" component={CheckoutPurchased} />
              <Route path="/checkout/checkout_item" component={CheckoutItem} />

              <Route path="/edit_account_information" component={ChangeUserInfoPage} />
              <Route path="/edit_account_password" component={ChangeUserPasswordPage} />

              <Route path="/search_result" component={SearchResult}/>
              <Route
                path="/edit_account_information"
                component={ChangeUserInfoPage}
              />
              <Route
                path="/edit_account_password"
                component={ChangeUserPasswordPage}
              />
              <Route component={Page404} />

            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
