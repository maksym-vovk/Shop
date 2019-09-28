import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {CheckoutItem} from '../CheckoutItem';

// styles
import './index.scss';
import {CartButton} from "../../Cart/CartButton";

const mapStateToProps = state => {
  return {
    checkoutItems: state.addToBag.items
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
          <CartButton state="Continue to Shipping Address"/>
      </Link>
      </div>
    </div>
  )
});