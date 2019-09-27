import React, {useEffect} from 'react';
import {CartItem} from '../CartItem';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeQuantity, changeTotalPrice, changeTotalItems, removeFromCart} from '../../../store';

// styles
import './index.scss'

const mapStateToProps = state => {
  return {
    cartItems: state.cart.items
  }
};

const mapDispatchToProps = {
  changeQuantity,
  changeTotalPrice,
  changeTotalItems,
  removeFromCart
}

export const CartList = connect(mapStateToProps, mapDispatchToProps)(props => {
  const {cartItems, changeTotalPrice, changeQuantity, changeTotalItems, removeFromCart} = props;

  let total = 0;
  cartItems.forEach(item => total += item.totalItemPrice);

  useEffect(() => {
    changeTotalPrice(total)
  }, [cartItems]);

  const changeTotalQuantity = () => {
    let totalItems = 0;
    cartItems.forEach(item => totalItems += item.quantity);
    changeTotalItems(totalItems);
  };

  const List = cartItems.map((item, index) => {
    // const pathname = "/cart/" + index;
    // return  (<Link to={pathname}  key={item.id}>
    //     <CartItem />
    // </Link>)

    return (
      <CartItem
        key={index}
        id={item.id}
        color={item.color}
        size={item.size}
        connectivity={item.connectivity}
        image={item.img}
        quantity={item.quantity}
        price={item.price}
        totalItemPrice={item.totalItemPrice}
        name={item.name}
        details={item.details}
        changeQuantity={changeQuantity}
        remove={removeFromCart}
      />
    )
  });

  return (
    <div className="cart-list">
      <div className="cart-list__title-block">
        <h1 className="cart-list__title">Bag</h1>
      </div>

      <h1 className="cart-list__subtitle">Here’s what’s in your bag.</h1>

      {List}

      <div className="cart-list__total-block">
        <h2 className="cart-list__total">Total:</h2>
        <span className="cart-list__total-price">${total}</span>
      </div>
      <div className="cart-list__button-wrapper">
        <Link to="/checkout" className="cart-list__link">
          <button onClick={() => changeTotalQuantity()} className="cart-list__button">Check Out</button>
        </Link>
      </div>
    </div>
  )
});