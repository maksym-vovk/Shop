import React from 'react';

import './index.scss';

export const FullCart = () => {
  return (
    <div className='wrap-full-cart'>
      <div className='full-cart__title bottom-line'>
        <h3>Cart</h3>
        <div className='wrap-full-price'>
          <div className='value-price'> 588.00 </div>
          <div className='check-out-btn'> Check Out</div>
        </div>
      </div>
      <div className='product-selected'>
        <h1 className='main-title-full-cart'>Here’s what’s in your cart.</h1>
        <div className='product-selected__item bottom-line'>
          <div className='product-selected__item--wrap-img'>
            <div >
              <img className='product-selected__item--img' src="static/img/cart/iphone8-silver-select-2018.jpg" alt=""/>
            </div>
          </div>
          <div className='wrap-section-product-selected'>
            <div className='section-product-selected-title bottom-line'>
              <h2 className='product-selected__title'>iPhone 8 64GB Silver</h2>
              <select name="quantity" className='product-selected__quantity'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <span className='product-selected__price'> 588.00 </span>
            </div>
            <ul>
              <li className= 'section-product-selected bottom-line'>We will deliver this product by courier delivery service. New mail at carrier rates.</li>
              <li className= 'section-product-selected bottom-line'>Warranty exchange / return of goods within 14 days</li>
              <li className= 'section-product-selected bottom-line'>Warranty exchange / return of goods within 14 days</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='total-price'>
        <h3> Total </h3>
        <h3> 588.00 </h3>
      </div>
      <div className='wrap__buy-btn'>
        <span className='buy-btn'> Buy / Check Out</span>
      </div>
    </div>
  )
};
