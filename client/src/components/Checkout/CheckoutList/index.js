import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {CheckoutItem} from '../CheckoutItem';
import {CartButton} from "../../Cart/CartButton";

// styles
import './index.scss';

const mapStateToProps = state => {
  return {
    checkoutItems: state.cart.items
  }
};

export const CheckoutList = connect(mapStateToProps)(({checkoutItems}) => {
  return (
    <div className="check-out">
      <h2 className="check-out__subtitle">In stock and ready to ship</h2>

      {
        checkoutItems.map((item, index) => {
          return <CheckoutItem key={index} data={item}/>
        })

      }
      <div className="continue-button-wrapper">
      <Link to="/checkout/shipping" className="continue-link">
          <CartButton title="Continue to Shipping Address"/>
      </Link>
      </div>
    </div>
  )
});