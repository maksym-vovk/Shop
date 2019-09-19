import React from "react";
import {Link} from "react-router-dom";
import {CheckoutTitle} from "../CheckoutTitle"
import {CheckoutItem} from "../CheckoutItem";
import {connect} from 'react-redux'

//styles
import './index.scss';

const mapStateToProps = state => {
    return {
        checkoutItems: state.addToBag.items
    }
};

export const CheckoutPage = connect(mapStateToProps) (({checkoutItems})=> {

    return (
        <div className="container">
            <CheckoutTitle/>

            <h2 className="check-out-subtitle">In stock and ready to ship</h2>

            {
                checkoutItems.map((item, index)=> {
                return <CheckoutItem key={index} data={item}/>
            })

            }
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
            <Link to="/checkout/shipping">
                <button type="submit" className="continue-button">Continue to Shipping Address</button>
            </Link>
        </div>
    )
});