import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { Search, Cart, Auth } from '../';

export const Extras = () => {
  return (
    <div className="extras">
      <Search />
      <Link to="/cart">
        <Cart />
      </Link>
      <Auth />
    </div>
  );
};
