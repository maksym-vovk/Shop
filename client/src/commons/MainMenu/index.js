import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';

export const MainMenu = () => {
  return (
    <nav className='main-menu'>
      <NavLink className='main-menu__item' to="/all_watch">All Watch</NavLink>
      <NavLink className='main-menu__item' to="/origin_watch">Origin Watch</NavLink>
      <NavLink className='main-menu__item' to="/nike_watch">Nike Watch</NavLink>
      <NavLink className='main-menu__item' to="/hermes_watch">Hermès Watch</NavLink>
      <NavLink className='main-menu__item' to="/edition_watch">Edition Watch</NavLink>
    </nav>
  );
};
