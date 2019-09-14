import React, {useState} from "react";
import {CheckoutSummary} from "../CheckoutSummary";

import './index.scss';

export const CheckoutTitle = () => {

    const [summary, setSummary] = useState(false);

    const changeSummaryStatus = () => {
        setSummary(!summary)
    };

    return (
        <div>
            {
                summary ?
                    <CheckoutSummary removeSummary={changeSummaryStatus}/>
                    : null
            }
            <div className="check-out container">
                <div className="check-out__title-block">
                    <h1 className="check-out__title">Checkout</h1>
                    <a onClick={() => setSummary(true)} href="/#" className="check-out__summary">Show Order Summary:
                        PRICE</a>
                </div>
            </div>
        </div>
    )
};