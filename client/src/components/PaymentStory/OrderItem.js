import React from 'react';

import {ProductList} from './ProductList';
import './index.scss';

const collapse = (event) => {
  const collapseBtn = event.currentTarget;
  const orderContent = collapseBtn.parentNode.querySelector('.order-item__content');

  collapseBtn.classList.toggle('order-item--active');
  if (orderContent.style.maxHeight) {
    orderContent.style.maxHeight = null;
  } else {
    orderContent.style.maxHeight = orderContent.scrollHeight + 'px';
  }
};

export const OrderItem = ({cart, orderDate, orderStatus}) => {
  const date = (dateOrder) => {
    const newDate = new Date(dateOrder);
    const day = newDate.getDay();
    const year = newDate.getFullYear();
    const month = newDate.toLocaleString('default', { month: 'long' });
    return String(`${day} ${month} ${year}`);
  };

  return (
    <React.Fragment>
      <div className="order-item">
        <button className="order-item__collapsible" onClick={(e) => collapse(e)}>
          <span className="order-item__order-number">Order</span>
          <span className="order-item__order-date">Date: { date(orderDate) }</span>
        </button>
        <div className="order-item__content">
          <div className="payment-story-product-list__item-wrapper">

            <ProductList cartItem={cart}/>
            <div className="payment-story-product-list-item-status">
              <p className="">
                Status: {
                  orderStatus
                    ? <span className="payment-story-product-list-item-status__success">Success</span>
                    : <span className="payment-story-product-list-item-status__fail">Not delivered</span>
                }
              </p>
            </div>

          </div>
        </div>
      </div>

    </React.Fragment>

  )
};