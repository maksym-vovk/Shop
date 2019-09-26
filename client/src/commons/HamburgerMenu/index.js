import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';

export const activeMenu = () => {
  const secondaryMenu = document.getElementById('secondary-menu');
  const secondaryMenuClass = secondaryMenu.getAttribute('class');

  if (secondaryMenuClass === 'secondary-menu container not-active') {
    console.log('active');
    secondaryMenu.classList.remove('not-active');
    secondaryMenu.classList.add('active')
  } else {
    secondaryMenu.classList.remove('active');
    secondaryMenu.classList.add('not-active')
  }
};

export const SecondaryMenu = () => {
  return (
    <nav id='secondary-menu' className='secondary-menu container not-active'>
      <NavLink className='secondary-menu__item' to="/all">All</NavLink>
      <NavLink className='secondary-menu__item' to="/origin">Origin</NavLink>
      <NavLink className='secondary-menu__item' to="/nike">Nike</NavLink>
      <NavLink className='secondary-menu__item' to="/hermes">Hermès</NavLink>
      <NavLink className='secondary-menu__item' to="/edition">Edition</NavLink>
    </nav>
  );
};