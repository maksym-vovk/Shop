import React, {useState, useEffect} from 'react';
import {CartItem} from "../CartItem";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {changeQuantity} from "../../../store";

//styles
import './index.scss'


const mapStateToProps = state => {
    return {
        cartItems: state.addToBag.items,
        totalPrice: state.addToBag.totalPrice,
    }
};

export const CartList = connect(mapStateToProps, {changeQuantity})((props) => {

    // console.log(props);

    const [total, setTotal]= useState(props.totalPrice);


    // const priceValues = document.getElementsByClassName('cart-item__price');

    // useEffect(()=> {
    //     let total = [...priceValues].reduce((acc, item) => {
    //         return acc + (+item.textContent.slice(1))
    //     }, 0);
    //
    //     console.log(total);
    //
    // }, [total]);

    // console.log(total);


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
                total={total}
                setTotal={setTotal}
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
                <span className="cart-list__total-price">${total}</span>
            </div>
            <Link to="/checkout">
                <button className="cart-list__button">Check Out</button>
            </Link>
        </div>
    )
});