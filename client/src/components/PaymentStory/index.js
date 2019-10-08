import React from 'react';

import {OrderList} from './OrderList';

export const PaymentStory = () => {
  return (
    <div className="container">
      <h2 className='page-title'>Your's order history</h2>
      <OrderList />
    </div>
  )
};