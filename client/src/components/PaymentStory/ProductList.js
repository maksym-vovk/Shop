import React from 'react';

import {ProductItem} from './ProductItem';
import {ProductItemTotalPrice} from './ProductItemTotalPrice';

export const ProductList = ({cartItem}) => {
  const {totalPrice, items} = cartItem;

  const renderProductItems = array => {
    return array.map((product, index) => <ProductItem product={product} key={index}/>)
  };

  return (
    <React.Fragment>
      <div className="payment-story-product-list">
        {renderProductItems(items)}
        <ProductItemTotalPrice price={totalPrice}/>
      </div>

    </React.Fragment>
  )
};