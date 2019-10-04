import React from 'react';

export const ProductItemTotalPrice = ({price}) => {
  return (
    <div className="payment-story-product-list__item">
      <div className="payment-story-product-list__item__total-wrapper">
        <span className="payment-story-product-list__item__total-price">Total price:</span>
        <span className="payment-story-product-list__item__total-price">{price}$</span>
      </div>
    </div>
  )
}