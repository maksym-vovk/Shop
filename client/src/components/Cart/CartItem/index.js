import React, {useState} from 'react';

//styles
import './index.scss'


export const CartItem = (props) => {
    console.log(props);
    const {quantity, color, connectivity, size, image, price, name, details, id, changeQuantity, total, setTotal} = props;
    const [count, setCount] = useState(quantity);
    // console.log(count);

    const onchangeHandler = (event) => {
        setCount(+event.target.value);
        changeQuantity(+count);
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
            <div className="cart-item__input-group">
                <input className="cart-item__input-button"
                       type="button"
                       onClick={()=> setCount(count-1)}
                       onBlur={() => setTotal(total - price*count)}
                       defaultValue="-"
                       />

                <input className="cart-item__input-value" min={0} id={id} value={count} onChange={onchangeHandler} />
                <input className="cart-item__input-button"
                       type="button"
                       onClick={()=> setCount(count+1)}
                       onBlur={() => setTotal(total + price*count)}
                       defaultValue="+"
                       />
            </div>
            <div className="cart-item__price-block">
                <span className="cart-item__price">${price*count}</span>
                <button className="cart-item__remove-link">Remove</button>
            </div>
        </div>
    )
};
