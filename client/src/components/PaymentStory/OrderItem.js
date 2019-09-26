import React from 'react';

import {ProductList} from './ProductList';
import './index.scss';

const collapse = (event) => {
  const collapseBtn = event.target;
  const orderContent = collapseBtn.nextElementSibling;

  collapseBtn.classList.toggle('order-item--active');
  if (orderContent.style.maxHeight) {
    orderContent.style.maxHeight = null;
  } else {
    orderContent.style.maxHeight = orderContent.scrollHeight + 'px';
  }
};

export const OrderItem = () => {
  return (
    <React.Fragment>
      <div className="order-item">
        <button className="order-item__collapsible" onClick={(e) => collapse(e)}>Open Section 1</button>
        <div className = "order-item__content">
          <div className="payment-story-product-list__item-wrapper">

            <ProductList />
            <div className="payment-story-product-list-item-status">
              <p className="">Status: <span className="payment-story-product-list-item-status__success">Success</span></p>
            </div>

          </div>
        </div>
      </div>

    </React.Fragment>

  )
};