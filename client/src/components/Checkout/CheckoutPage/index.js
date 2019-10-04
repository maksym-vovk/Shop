import React from 'react';
import {CheckoutTitle} from '../CheckoutTitle'
import {CheckoutList} from '../CheckoutList';
// import {DeliveryMethod} from "../DeliveryMethod";
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    checkoutItems: state.cart.items,
    checkoutTotalPrice: state.cart.totalPrice,
    checkoutTotalItems: state.cart.totalItems,
    checkoutGrandTotalPrice: state.cart.grandTotalPrice
  }
};

export const CheckoutPage = connect(mapStateToProps)(({checkoutTotalPrice, checkoutItems, checkoutTotalItems, checkoutGrandTotalPrice}) => {
  return (
    <div className="container">
      <CheckoutTitle
        totalPrice={checkoutTotalPrice}
        data={checkoutItems}
        totalItems={checkoutTotalItems}
        grandTotalPrice={checkoutGrandTotalPrice}/>

      <CheckoutList/>
      {/* <DeliveryMethod/> */}
    </div>
  )
});