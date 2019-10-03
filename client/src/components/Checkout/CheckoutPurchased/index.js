import React from 'react';
import {Link} from "react-router-dom";

import { CartButton } from "../../Cart/CartButton";

// styles
import './index.scss';

export const CheckoutPurchased = () => {
  return (
    <div className="container">
      <div className="purchase">
        <div className="purchase__block">
          <img className="purchase__logo" src="/static/img/Apple_Grey_Logo.png" alt="apple-logo"/>
          <h1 className="purchase__text">Thank you for purchase</h1>
          <Link to="/all">
            <CartButton title="Continue Shopping"/>
          </Link>
        </div>
      </div>
    </div>
  )
};