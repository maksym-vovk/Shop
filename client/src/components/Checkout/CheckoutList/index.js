import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {CheckoutItem} from '../CheckoutItem';

// styles
import './index.scss';

const mapStateToProps = state => {
  return {
    checkoutItems: state.cart.items
  }
};

export const CheckoutList = connect(mapStateToProps)(({checkoutItems}) => {
  return (
    <div>
      <h2 className="check-out-subtitle">In stock and ready to ship</h2>

      {
        checkoutItems.map((item, index) => {
          return <CheckoutItem key={index} data={item}/>
        })

      }
      <div className="continue-button-wrapper">
        <Link to="/checkout/shipping" className="continue-link">
          <button type="submit" className="continue-button">Continue to Shipping Address</button>
        </Link>
      </div>
    </div>
  )
});