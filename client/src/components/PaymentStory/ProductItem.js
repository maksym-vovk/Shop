import React from 'react';

const items = (number) => {
  return (number === 1)
    ? `${number} item`
    : `${number} items`
}
export const ProductItem = ({product}) => {
  const {name, img, price, quantity, totalItemPrice} = product;

  return (
    <div className="payment-story-product-list__item">
      <figure className="payment-story-product-list__item__image-wrapper">
        <img className="payment-story-product-list__item__image-wrapper--image"
          src={img} alt=""/>
      </figure>

      <div className="payment-story-product-list__item__details">
        <div className="payment-story-product-list__item__details__product-title">
          <p className="payment-story-product-list__item__details__product-title__text" >{name}</p>
        </div>
        <div className="payment-story-product-list__item__details__product-detail">
          <span className="payment-story-product-list__item__details__product-detail__price">
            {price}$
          </span>
          <span className="payment-story-product-list__item__details__product-detail__quantity">
            {items(quantity)}
          </span>
          <span className="payment-story-product-list__item__details__product-detail__total-product-price">
              Price: {totalItemPrice}$
          </span>
        </div>
      </div>
    </div>
  )
};