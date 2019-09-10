import React from "react";

//styles
import './index.scss';

export const CheckoutSummary = () => {
    return (
        <div className="background">
            <div className="summary">
                <div className="summary-container">
                    <div className="total">
                        <h3 className="total__title">Your Oder Total</h3>
                        <div className="total__items-section">
                            <span className="total__quantity">Quantity:___items</span>
                            <a href="#" className="total__edit">Edit bag</a>
                        </div>
                        <div className="total__price">
                            <div className="total__price-item">
                                <span className="total__label">Subtotal</span>
                                <span className="total__cost">1000</span>
                            </div>
                            <div className="total__price-item">
                                <span className="total__label">Shipping</span>
                                <span className="total__cost">1000</span>
                            </div>
                            <div className="total__price-item">
                                <span className="total__label">Tax</span>
                                <span className="total__cost">1000</span>
                            </div>
                        </div>
                        <div className="total__sum-block">
                            <span className="total__sum-label">Total</span>
                            <span className="total__sum">1000</span>
                        </div>
                    </div>
                    <div className="details">
                        <h3 className="details__title">Your Order Details</h3>
                        <p className="details__item">Shipment method</p>
                        <p className="details__item">Delivery address</p>
                        <p className="details__item">Payment</p>
                    </div>
                </div>
            </div>
        </div>
    )
};