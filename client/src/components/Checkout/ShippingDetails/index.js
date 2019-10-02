import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {ShippingDetails} from './ShippingDetails';
import {CheckoutTitle} from '../CheckoutTitle'

const mapStateToProps = state => ({
  shippingDetails: state.shippingDetailsStatus.status,
  checkoutItems: state.cart.items,
  checkoutTotalPrice: state.cart.totalPrice,
  checkoutTotalItems: state.cart.totalItems,
  checkoutGrandTotalPrice: state.cart.grandTotalPrice,
  authorized: state.user.authorized
});

export const ShippingDetailsForm = connect(mapStateToProps)(({checkoutTotalPrice, checkoutItems, checkoutTotalItems, checkoutGrandTotalPrice, shippingDetails, authorized}) => {
  return (
    <div className="container">
      <CheckoutTitle
        totalPrice={checkoutTotalPrice}
        data={checkoutItems}
        totalItems={checkoutTotalItems}
        grandTotalPrice={checkoutGrandTotalPrice}
      />
      {shippingDetails ? <Redirect to='/checkout/purchased'/> : null }
      <ShippingDetails authorized={authorized} />
    </div>
  )
});
