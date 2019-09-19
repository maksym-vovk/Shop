import React from 'react';
import { Provider } from 'react-redux';
import { Header, Footer } from './commons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';
import {
  HomePage,
  AllWatch,
  OriginWatch,
  NikeWatch,
  HermesWatch,
  EditionWatch,
  RegisterForm,
  Cart,
  UserCabinet,
  ChangeUserInfoPage,
  ChangeUserPasswordPage,

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
              <Route path="/all_watch" component={AllWatch} />
              <Route path="/origin_watch" component={OriginWatch} />
              <Route path="/nike_watch" component={NikeWatch} />
              <Route path="/hermes_watch" component={HermesWatch} />
              <Route path="/edition_watch" component={EditionWatch} />
              <Route path="/watch/:id" component={ProductViewPage} />
              <Route path="/sign_up" component={RegisterForm} />
              <Route path="/cart" component={Cart} />
              <Route path="/user_cabinet" component={UserCabinet} />
              <Route path="/edit_account_information" component={ChangeUserInfoPage} />
              <Route path="/edit_account_password" component={ChangeUserPasswordPage} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
