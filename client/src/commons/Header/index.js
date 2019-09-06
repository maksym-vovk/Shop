import React from 'react';
import {Logo, MainMenu, SearchIcon} from '../';

import './index.scss';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <Logo/>
        <MainMenu/>
        <SearchIcon/>
      </div>
    </header>
  );
};