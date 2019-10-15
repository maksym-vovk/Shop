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

const dateFormat = (date) => {
  const newDate = new Date(date);
  let day = Number(newDate.getDate());
  switch (day) {
    case 1 && 21 && 31:
      day += 'st';
      break;
    case 2 && 22:
      day += 'nd';
      break;
    case 3:
      day += 'rd';
      break;

    default:
      day += 'th'
  }
  const year = newDate.getFullYear();
  const month = newDate.toLocaleString('en', { month: 'long' });
  return String(`${month} ${day}, ${year}`);
};

export const OrderItem = ({cart, orderDate, orderStatus}) => {
  return (
    <React.Fragment>
      <div className="order-item">
        <button className="order-item__collapsible" onClick={(e) => collapse(e)}>
          <span className="order-item__order-number">Order</span>
          <span className="order-item__order-date">Date: { dateFormat(orderDate) }</span>
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