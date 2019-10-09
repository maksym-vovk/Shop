import React, {useState} from 'react';

//components
import {CheckoutSummary} from '../CheckoutSummary';
import useWindowDimensions from '../../../commons/Header';

//styles
import './index.scss';

export const CheckoutTitle = ({totalPrice, totalItems, data, grandTotalPrice, deliveryPrice}) => {
    const {width} = useWindowDimensions();

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
            deliveryPrice={deliveryPrice}
          />
          : null
      }

        <div className="check-out">
        <div className="check-out__title-block">
          <h1 className="check-out__title">Checkout</h1>
            {width <= 481

                ? <button onClick={() => setSummary(true)} className="check-out__button"> Summary: ${grandTotalPrice}</button>
                :  <button onClick={() => setSummary(true)} className="check-out__button">Show Order Summary: ${grandTotalPrice}</button>}

        </div>
        </div>
    </div>
  )
};