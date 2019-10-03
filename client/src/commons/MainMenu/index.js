import React from 'react';
import {NavLink} from 'react-router-dom';
import useWindowDimensions from '../Header';

import './index.scss';
import { SearchInput } from '../SearchInput';

export const MainMenu = () => {
  const {width} = useWindowDimensions()
  return (
    <nav className='main-menu'>
      {width < 768 ? <SearchInput /> : null}

      <NavLink className='main-menu__item' to="/all">All</NavLink>
      <NavLink className='main-menu__item' to="/origin">Origin</NavLink>
      <NavLink className='main-menu__item' to="/nike">Nike</NavLink>
      <NavLink className='main-menu__item' to="/hermes">Hermès</NavLink>
      <NavLink className='main-menu__item' to="/edition">Edition</NavLink>
    </nav>
  );
};
