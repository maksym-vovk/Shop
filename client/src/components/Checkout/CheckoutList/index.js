import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

//components
import { CheckoutItem } from '../CheckoutItem';
import { CartButton } from '../../Cart/CartButton';
import { DeliveryMethod } from "../DeliveryMethod";

import { setDeliveryPrice, calcGrandTotalPrice } from "../../../store";

// styles
import './index.scss';

const mapStateToProps = state => {
  return {
    checkoutItems: state.cart.items,
      delivery: state.cart.deliveryPrice,
  }
};

export const CheckoutList = connect(mapStateToProps, {setDeliveryPrice, calcGrandTotalPrice})((props) => {
    const {checkoutItems, setDeliveryPrice, delivery, calcGrandTotalPrice} = props;

    useEffect(() => {
        calcGrandTotalPrice()
    }, [delivery, calcGrandTotalPrice]);

  return (
    <div className="check-out">
      <h2 className="check-out__subtitle">In stock and ready to ship</h2>

      {
        checkoutItems.map((item, index) => {
          return <CheckoutItem key={index} data={item}/>
        })

      }
        <DeliveryMethod deliveryPrice={setDeliveryPrice}/>
      <div className="continue-button-wrapper">
        <Link to="/checkout/shipping" className="continue-link">
          <CartButton title="Continue to Shipping Address"/>
        </Link>
      </div>
    </div>
  )
});