import React from 'react';

import './index.scss'

export const Cart = () => {
  return (
    <div className='container container-cart'>
      <div className='wrap-cart'>
        <h1 className='cart-title'> Your bag is empty. </h1>
        <span className='cart-title'>Sign in to see if you have any saved items. Or continue shopping.</span>
        <div className= 'img-empty-cart'>
          <span>

          </span>
        </div>
      </div>
    </div>
  )
};