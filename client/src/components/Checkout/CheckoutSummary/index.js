import React from 'react';
import {Link} from 'react-router-dom';

// styles
import './index.scss';

export const CheckoutSummary = ({removeSummary, totalPrice, totalItems, grandTotalPrice}) => {
  const checkBackground = (event) => {
    const target = event.target;
    if (target.classList.contains('background') || target.classList.contains('summary__cancel-image')) {
      removeSummary()
    }
  };
  return (
    <div onClick={checkBackground} className="background">
      <div className="summary">
        <div className="summary-container">
          <div className="summary__cancel">
            <img className="summary__cancel-image" src="../static/img/cancel.png" alt="cancel"/>
          </div>
          <div className="total">
            <h3 className="total__title">Your Oder Total</h3>
            <div className="total__items-section">
              <span className="total__quantity">Quantity: {totalItems} items</span>
              <Link className="total__edit" to="/cart">Edit bag</Link>
            </div>
            <div className="total__price">
              <div className="total__price-item">
                <span className="total__label">Subtotal</span>
                <span className="total__cost">{totalPrice}</span>
              </div>
              <div className="total__price-item">
                <span className="total__label">Shipping</span>
                <span className="total__cost">1000</span>
              </div>
            </div>
            <div className="total__sum-block">
              <span className="total__sum-label">Total</span>
              <span className="total__sum">{grandTotalPrice}</span>
            </div>
          </div>
          <div className="details">
            <h3 className="details__title">Your Order Details</h3>
            <p className="details__item">Shipment method</p>
            <p className="details__item">Delivery address</p>
            <p className="details__item">Payment</p>
          </div>
        </div>
      </div>
    </div>
  )
};