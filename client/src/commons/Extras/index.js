import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Search, Cart, Auth, UserIcon } from '../';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  loginStatus: state.user.authorized,
});

export const Extras = connect(mapStateToProps)((props) => {
  const loginStatus = props.loginStatus;
  return (
    <div className="extras">
      <Search />
      <Link to="/cart">
        <Cart />
      </Link>
      { loginStatus
        ? <UserIcon/>
        : <Auth/>
      }
    </div>
  );
});
