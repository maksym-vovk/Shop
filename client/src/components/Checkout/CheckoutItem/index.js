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
        <div className="product-block">
            {
                productDetails ?
                    <CheckoutItemDetails removeProductDetails={changeProductDetailsStatus}/>
                    : null
            }
            <div className="product">
                <div className="product__item">
                    <img className="product__image" src="/static/img/watch/Apple_Watch_Series_5/Gold_Aluminum_Case_with_Sport_Band/Alaskan_Blue/1.jpg" alt="watch"/>
                </div>
                <div className="product__description">
                    <p className="product__text">Apple Watch Series 5</p>
                    <span className="product__quantity">Quantity: NR</span>
                    <a onClick={() => {setProductDetails(true)}} href="#"
                       className="product__details-link">View details</a>
                </div>
            </div>
        </div>
    )
};