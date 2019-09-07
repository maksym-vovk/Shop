import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

export const MainMenu = () => {
  return (
    <nav className='main-menu'>
      <NavLink className='main-menu__item' to="/imac">iMac</NavLink>
      <NavLink className='main-menu__item' to="/macbook">MacBook</NavLink>
      <NavLink className='main-menu__item' to="/ipad">iPad</NavLink>
      <NavLink className='main-menu__item' to="/iphone">iPhone</NavLink>
      <NavLink className='main-menu__item' to="/watch">Watch</NavLink>
    </nav>
  );
};
