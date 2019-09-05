import React from "react";
import { NavLink } from "react-router-dom";

import './index.scss';

export const MainMenu = () => {
    return (
        <nav className='main-menu'>
            <NavLink className='main-menu-item' to="/mac">Mac</NavLink>
            <NavLink className='main-menu-item' to="/macbook">MacBook</NavLink>
            <NavLink className='main-menu-item' to="/ipad">iPad</NavLink>
            <NavLink className='main-menu-item' to="/iphone">iPhone</NavLink>
            <NavLink className='main-menu-item' to="/accessories">Accessories</NavLink>
        </nav>
    );
};
