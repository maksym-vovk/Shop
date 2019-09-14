import React from 'react';
import {NavLink} from 'react-router-dom';

import './index.scss';

export const MainMenu = () => {
    return (
        <nav className='main-menu'>
            <NavLink className='main-menu__item' to="/all">All Watch</NavLink>
            <NavLink className='main-menu__item' to="/origin">Origin Watch</NavLink>
            <NavLink className='main-menu__item' to="/nike">Nike Watch</NavLink>
            <NavLink className='main-menu__item' to="/hermes">Hermès Watch</NavLink>
            <NavLink className='main-menu__item' to="/edition">Edition Watch</NavLink>
            <NavLink className='main-menu__item' to="/checkout">Checkout</NavLink>
        </nav>
    );
};
