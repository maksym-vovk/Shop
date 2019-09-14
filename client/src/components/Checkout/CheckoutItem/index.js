import React, {useState} from "react";
import {CheckoutItemDetails} from "../CheckoutItemDetails";

//styles
import './index.scss';

export const CheckoutItem = () => {
    const [productDetails, setProductDetails] = useState(false);

    const changeProductDetailsStatus = () => {
        setProductDetails(!productDetails)
    };

    return (
        <div>
            {
                productDetails ?
                    <CheckoutItemDetails removeProductDetails={changeProductDetailsStatus}/>
                    : null
            }
            <div className="product">
                <div className="product__item">
                    <img className="product__image" src="/static/img/watches/series-4/1.jpg" alt="watch"/>
                </div>
                <div className="product__description">
                    <p className="product__text">21.5-inch iMac with Retina 4K display</p>
                    <span className="product__quantity">Quantity: NR</span>
                    <a onClick={() => {setProductDetails(true)}} href="/#"
                       className="product__details-link">View details</a>
                </div>
            </div>
        </div>
    )
};