import React from 'react';

//styles
import './index.scss';

export const CartButton = props => {
    return (
        <button className="cart-button" type="submit">{props.title}</button>
    )
};