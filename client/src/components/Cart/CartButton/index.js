import React from 'react';

//styles
import './index.scss';

export const CartButton = props => {
    console.log(props);
    return (
        <button className="cart-button" type="submit">{props.state}</button>
    )
};