import React from 'react';
import {CartList} from "../CartList";
import {EmptyCart} from "../EmptyCart";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        cartItems: state.addToBag.items
    }
};

export const CartPage = connect(mapStateToProps)(({cartItems})=> {
    return(
        <div className="container">
            { cartItems.length > 0 ?
                <CartList/> : <EmptyCart/>
            }
        </div>
    )
});