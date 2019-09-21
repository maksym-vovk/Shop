import React from 'react';
import {CheckoutTitle} from '../CheckoutTitle'
import {CheckoutList} from '../CheckoutList';
// import {DeliveryMethod} from "../DeliveryMethod";
import {connect} from 'react-redux'

// styles
import './index.scss';

const mapStateToProps = state => {
  return {
    checkoutItems: state.addToBag.items,
    checkoutTotalPrice: state.addToBag.totalPrice,
    checkoutTotalItems: state.addToBag.totalItems,
    checkoutGrandTotalPrice: state.addToBag.grandTotalPrice
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