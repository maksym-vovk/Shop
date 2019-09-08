import React from 'react';
import {Logo, MainMenu, Extras} from '../';

import './index.scss';

export const Header = () => {
  return (
    <header className='page-header'>
      <div className='page-header__wrapper container'>
        <Logo/>
        <MainMenu/>
        <Extras/>
      </div>
    </header>
  );
};