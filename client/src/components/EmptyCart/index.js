import React from 'react';

import './index.scss'

export const EmptyCart = () => {
  return (
    <div className='wrap-empty-cart'>
      <h1 className='cart-title'> Your cart is empty. </h1>
      <span className='cart-title'>Sign in to see if you have any saved items. Or continue shopping.</span>
      <div className='img-empty-cart'/>
    </div>
  )
};