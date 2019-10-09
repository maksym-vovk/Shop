import React, {useState} from 'react';

// styles
import './index.scss'

export const CartItem = (props) => {
  const {quantity, color, image, price, totalItemPrice, name, details, id, changeQuantity, remove} = props;
  let [count, setCount] = useState(quantity);

    const onchangeHandler = (event) => {
        const inputValue = event.target.value;
        const max = 1000;
        const maxLength = max.toString().length - 1;

        const re = /^[0-9\b]+$/;

        if (inputValue < max && (event.target.value === '' || re.test(event.target.value))) {
            setCount(Number(inputValue));
            changeQuantity(Number(inputValue), Number(inputValue * price), id)
        } else {
            parseInt(inputValue.toString().substring(0, maxLength));
        }
    };

    const onDecrementHandler = () => {
        if (count > 1) {
            setCount(--count);
            changeQuantity(count, count * price, id);
        }
    };

    const onIncrementHandler = () => {
        const max = 999;
        if (count < max) {
            setCount(++count);
            changeQuantity(count, count * price, id);
        } else {
            parseInt(count.toString().substring(0, max))
        }
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
                   type="number"
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
          <button className="cart-item__remove-link" onClick={() => remove(id)}>Remove</button>
        </div>
      </div>
    </div>
  )
};
