import React from 'react';

// styles
import './index.scss';

export const CheckoutItemDetails = ({ removeProductDetails, data }) => {
  const checkBackground = (event) => {
    const target = event.target;
    if (target.classList.contains('background') || target.classList.contains('product-details__cancel-image')) {
      removeProductDetails()
    }
  };
  return (
    <div onClick={checkBackground} className="product-details background">
      <div className="product-details__item">
        <div className="product-details__cancel">
          <img className="product-details__cancel-image" src="../static/img/cancel.png" alt="cancel"/>
        </div>

        <div className="product-details__wrapper">
          <div className="product-details__image-item">
            <img className="product-details__image" src={data.image} alt={data.name}/>
          </div>
          <div className="product-details__summary">
            <h2 className="product-details__subtitle">{data.name}</h2>
            <span className="product-details__quantity">Quantity: {data.quantity}</span>
            <ul className="product-details__description">
              <li className="product-details__description-item">{data.details}</li>
              <li className="product-details__description-item">Color: {data.color}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
};