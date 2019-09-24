import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';

export const MainMenu = () => {
  return (
    <nav className='main-menu'>
      <NavLink className='main-menu__item' to="/all">All</NavLink>
      <NavLink className='main-menu__item' to="/origin">Origin</NavLink>
      <NavLink className='main-menu__item' to="/nike">Nike</NavLink>
      <NavLink className='main-menu__item' to="/hermes">Hermès</NavLink>
      <NavLink className='main-menu__item' to="/edition">Edition</NavLink>
    </nav>
  );
};
