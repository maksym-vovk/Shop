import React from 'react';

export const ProductItem = () => {
  return (
    <div className="payment-story-product-list__item">
      <figure className="payment-story-product-list__item__image-wrapper">
        <img className="payment-story-product-list__item__image-wrapper--image"
          src="/static/img/watch/Apple_Watch_Edition/Space_Black_Titanium_Case_with_Leather_Loop/Black/1.jpg" alt=""/>
      </figure>

      <div className="payment-story-product-list__item__details">
        <div className="payment-story-product-list__item__details__product-title">
          <p className="payment-story-product-list__item__details__product-title__text" >some  title for product</p>
        </div>
        <div className="payment-story-product-list__item__details__product-detail">
          <span className="payment-story-product-list__item__details__product-detail__price">
              150$
          </span>
          <span className="payment-story-product-list__item__details__product-detail__quantity">
              qty: 2
          </span>
          <span className="payment-story-product-list__item__details__product-detail__total-product-price">
              Price: 300$
          </span>
        </div>
      </div>
    </div>
  )
};