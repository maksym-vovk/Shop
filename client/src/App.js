import React from 'react';
import { Provider } from 'react-redux';
import { Header, Footer } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import {
  HomePage,
  All,
  Hermes,
  Origin,
  Nike,
  Edition,
  RegisterForm,
  Cart,
  UserCabinet,
  ChangeUserInfoPage,
  ChangeUserPasswordPage,
  Page404
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
              <Route exact path="/all" component={All} />
              <Route path="/origin" component={Origin} />
              <Route path="/nike" component={Nike} />
              <Route path="/hermes" component={Hermes} />
              <Route path="/edition" component={Edition} />
              <Route path="/all/:id" component={ProductViewPage} />
              <Route path="/sign_up" component={RegisterForm} />
              <Route path="/cart" component={Cart} />
              <Route path="/user_cabinet" component={UserCabinet} />
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
