import React from 'react';

import {OrderItem} from './OrderItem';

export const OrderList = () => {
  return (
    <React.Fragment>
      <div className="container">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>

    </React.Fragment>
  )
}