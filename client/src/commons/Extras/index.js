import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Search, Cart, Auth, UserIcon } from '../';
import {connect} from 'react-redux';
import useWindowDimensions from '../Header'
const mapStateToProps = (state) => ({
  loginStatus: state.user.authorized,
  cartItems: state.cart.items
});

export const Extras = connect(mapStateToProps)((props) => {
  const { width } = useWindowDimensions();
  const loginStatus = props.loginStatus;
  return (
    <div className="extras">
      {
        width <= 768 ? null : <Search />
      }
      <Link to="/cart">
        <Cart items={props.cartItems}/>
      </Link>
      { loginStatus
        ? <UserIcon/>
        : <Auth/>
      }
    </div>
  );
});
