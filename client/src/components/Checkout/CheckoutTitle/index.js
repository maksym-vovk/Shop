import React, {useState} from 'react';
import {CheckoutSummary} from '../CheckoutSummary';

import './index.scss';

export const CheckoutTitle = ({totalPrice, totalItems, data, grandTotalPrice}) => {
  const [summary, setSummary] = useState(false);
  const changeSummaryStatus = () => {
    setSummary(!summary)
  };

  return (
    <div>
      {
        summary
          ? <CheckoutSummary
            removeSummary={changeSummaryStatus}
            totalPrice={totalPrice}
            data={data}
            totalItems={totalItems}
            grandTotalPrice={grandTotalPrice}
          />
          : null
      }
      <div className="check-out">
        <div className="check-out__title-block">
          <h1 className="check-out__title">Checkout</h1>
          <button onClick={() => setSummary(true)} className="check-out__button">Show Order Summary: ${totalPrice}</button>
        </div>
      </div>
    </div>
  )
};