import React from 'react';

import {ProductItem} from './ProductItem';
import {ProductItemTotalPrice} from './ProductItemTotalPrice';

export const ProductList = () => {
  return (
    <React.Fragment>
      <div className="payment-story-product-list">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItemTotalPrice />
      </div>

    </React.Fragment>
  )
}