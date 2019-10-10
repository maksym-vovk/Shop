import React from 'react';
import {connect} from 'react-redux'

// components
import {CheckoutTitle} from '../CheckoutTitle'
import {CheckoutList} from '../CheckoutList';

const mapStateToProps = state => {
  return {
    checkoutItems: state.cart.items,
    checkoutTotalPrice: state.cart.totalPrice,
    checkoutTotalItems: state.cart.totalItems,
    checkoutGrandTotalPrice: state.cart.grandTotalPrice,
    deliveryPrice: state.cart.deliveryPrice
  }
};

export const CheckoutPage = connect(mapStateToProps)((props) => {
  const {checkoutTotalPrice, checkoutItems, checkoutTotalItems, checkoutGrandTotalPrice, deliveryPrice} = props;
  return (
    <div className="container">
      <CheckoutTitle
        totalPrice={checkoutTotalPrice}
        data={checkoutItems}
        totalItems={checkoutTotalItems}
        deliveryPrice={deliveryPrice}
        grandTotalPrice={checkoutGrandTotalPrice}/>
      <CheckoutList/>
    </div>
  )
});