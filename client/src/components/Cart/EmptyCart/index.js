import React from "react";
import {Link} from "react-router-dom";

//styles
import './index.scss';

export const EmptyCart = () => {
    return (
        <div className="container">
            <div className="empty-cart">
                <h1 className="empty-cart__text">Your bag is empty.</h1>
                <Link to="/">
                    <button className="empty-cart__button">Continue Shopping</button>
                </Link>
                <img className="empty-cart__image" src="/static/img/cart/apple-cart.jpg" alt="apple-cart"/>
            </div>
        </div>
    )
};