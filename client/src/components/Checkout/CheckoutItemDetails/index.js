import React from "react";

//styles
import './index.scss';

export const CheckoutItemDetails = ({ removeProductDetails }) => {

    const checkBackground = (event) => {
        console.log(event.target);
        const target = event.target;
        if (target.classList.contains("background") || target.classList.contains("product-details__cancel-image")) {
            removeProductDetails()
        }
    };

    return (
        <div onClick={checkBackground} className="product-details background">
            <div className="product-details__item">
                <div className="product-details__cancel">
                    <img className="product-details__cancel-image" src="../static/img/cancel.png" alt="cancel"/>
                </div>

                <div className="product-details__wrapper">
                    <div className="product-details__image-item">
                        <img className="product-details__image" src="/static/img/watches/series-4/1.jpg" alt="watch"/>
                    </div>
                    <div className="product-details__summary">
                        <h2 className="product-details__subtitle">Apple Watch Series 5</h2>
                        <span className="product-details__quantity">Quantity: NR</span>
                        <ul className="product-details__description">
                            <li className="product-details__description-item">Aluminum Case with Alaskan Blue Sport Loop</li>
                            <li className="product-details__description-item">GPS, 40mm Space Gray </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};