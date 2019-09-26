import React, {useState} from 'react';

// styles
import './index.scss'

export const CartItem = (props) => {
    const {quantity, color, connectivity, size, image, price, totalItemPrice, name, details, id, changeQuantity, changeTotalItems} = props;
    let [count, setCount] = useState(quantity);
    let [totalPrice, setTotalPrice] = useState(totalItemPrice);


    const onchangeHandler = (event) => {
        setCount(Number(event.target.value));
        setTotalPrice(Number(event.target.value) * price);
        changeQuantity(Number(event.target.value), Number(event.target.value*price), id);
    };

    const onDecrementHandler = () => {
        if(count>1) {
            setCount(--count);
            setTotalPrice(count * price);
            changeQuantity(count, count*price, id);
        }
    };

    const onIncrementHandler = () => {
        setCount(++count);
        setTotalPrice(count * price);
        changeQuantity(count, count*price, id);
    };

    return (
        <div className="cart-item">
            <img className="cart-item__image"
                 src={image}
                 alt={name}
            />
            <div className="cart-item__details-block">
                <p className="cart-item__name">{name}</p>
                <p className="cart-item__details">{details}</p>
                <p className="cart-item__details">Color: {color}</p>
                <p className="cart-item__details">Size: {size}</p>
                <p className="cart-item__details">Connectivity: {connectivity}</p>
            </div>
            <div className="cart-item__price-wrapper">
                <div className="cart-item__input-group">
                    <input className="cart-item__input-button"
                           type="button"
                        onClick={() => {
                            onDecrementHandler()
                        }}
                           defaultValue="-"
                    />
                    <input className="cart-item__input-value"
                           maxLength="999"
                           id={id}
                           value={count}
                           onChange={onchangeHandler}
                    />
                    <input className="cart-item__input-button"
                           type="button"
                        onClick={() => {
                            onIncrementHandler()
                        }}
                           defaultValue="+"
                    />
                </div>
                <div className="cart-item__price-block">
                    <span className="cart-item__price">${totalItemPrice}</span>
                    <button className="cart-item__remove-link">Remove</button>
                </div>
            </div>
        </div>
    )
};
