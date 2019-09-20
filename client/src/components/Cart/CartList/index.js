import React from 'react';
import {CartItem} from "../CartItem";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {changeQuantity} from "../../../store";

//styles
import './index.scss'


const mapStateToProps = state => {
    return {
        cartItems: state.addToBag.items,
    }
};

export const CartList = connect(mapStateToProps, {changeQuantity})((props) => {


    const List = props.cartItems.map((item, index) => {
        // const pathname = "/cart-items/" + index;
        // return  (<Link to={pathname}  key={item.id}>
        //     <CartItem quantity={itemsQuantity} />
        // </Link>)

        return (
            <CartItem
                key={index}
                id={item.id}
                color={item.color}
                size={item.size}
                connectivity={item.connectivity}
                image={item.image}
                quantity={item.quantity}
                price={item.price}
                name={item.name}
                details={item.details}
                changeQuantity={props.changeQuantity}
            />
        )
    });
    return (
        <div className="cart-list container">
            <div className="cart-list__title-block">
                <h1 className="cart__title">Bag</h1>
            </div>

            <h1 className="cart-list__title">Here’s what’s in your bag.</h1>

            {List}

            <div className="cart-list__total-block">
                <h2 className="cart-list__total">Total:</h2>
                <span className="cart-list__total-price">$400</span>
            </div>
            <Link to="/checkout">
                <button className="cart-list__button">Check Out</button>
            </Link>
        </div>
    )
});