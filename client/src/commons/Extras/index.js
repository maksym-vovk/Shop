import React from 'react';
import './index.scss';
import { Search, Cart, Auth } from '../';

export const Extras = () => {
  return (
    <div className="extras">
      <Search />
      <Cart />
      <Auth />
    </div>
  );
};
