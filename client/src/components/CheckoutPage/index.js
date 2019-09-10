import React from "react";
// import { CheckoutSummary } from "./CheckoutSummary"

//styles
import './index.scss';

export const CheckoutPage = () => {
    return (
        <div className="check-out container">
            <div className="check-out__title-block">
                <h1 className="check-out__title">Checkout</h1>
                <a href="#" className="check-out__summary">Show Order Summary: PRICE</a>
            </div>
            <h2 className="check-out__subtitle">In stock and ready to ship</h2>
            <div className="product">
                <div className="product__item">
                    <img className="product__image" src="static/img/watches/series-4/1.jpg" alt="watch"/>
                </div>
                <div className="product__description">
                    <p className="product__text">21.5-inch iMac with Retina 4K display</p>
                    <span className="product__quantity">Quantity: NR</span>
                    <a href="#" className="product__details-link">View details</a>
                </div>
            </div>
            <div className="delivery-block">
                <div className="delivery">
                    <p className="delivery__subtitle">Select your delivery method:</p>
                    <div className="delivery__option">
                        <span className="delivery__method">Standard Delivery</span>
                        <span className="delivery__price">FREE</span>
                    </div>
                    <div className="delivery__option">
                        <span className="delivery__method">Express Delivery</span>
                        <div className="delivery__price">
                            <span>$8.00</span>
                            <span className="delivery__price-text">Flat rate</span>
                        </div>
                    </div>
                    <div className="delivery__option">
                        <span className="delivery__method">Courier Delivery from an Apple Store</span>
                        <div className="delivery__price">
                            <span>$9.00</span>
                            <span className="delivery__price-text">Flat rate</span>
                        </div>
                    </div>
                </div>
                <div className="reference">
                    <p className="reference__subtitle">Some things to keep in mind:</p>
                    <ul className="reference__list">
                        <li className="reference__list-item">The carrier may require a signature upon delivery.</li>
                        <li className="reference__list-item">Courier Delivery is only available in select areas and
                            requires someone to be present when your
                            order arrives. You may also be contacted prior to delivery.
                        </li>
                    </ul>
                </div>
            </div>
            <button type="submit" className="continue-button">Continue to Shipping Address</button>
        </div>
    )
};