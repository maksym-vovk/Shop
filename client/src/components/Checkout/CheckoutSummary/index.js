import React from 'react';
import {Link} from 'react-router-dom';

// styles
import './index.scss';

export const CheckoutSummary = ({removeSummary, totalPrice, totalItems, deliveryPrice, grandTotalPrice}) => {
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
              <span className="total__quantity">Quantity: {totalItems} item(s)</span>
              <Link className="total__edit" to="/cart">Edit bag</Link>
            </div>
            <div className="total__sum-block--add">
              <span className="total__sum-label">SubTotal</span>
              <span className="total__sum">${totalPrice}</span>
            </div>
            <div className="total__sum-block--add">
              <span className="total__sum-label">Shipping</span>
              <span className="total__sum">${deliveryPrice}</span>
            </div>
            <div className="total__sum-block">
              <span className="total__sum-label">Total</span>
              <span className="total__sum">${grandTotalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};