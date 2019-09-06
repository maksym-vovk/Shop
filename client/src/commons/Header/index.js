import React, {useState} from 'react';
import {Logo, MainMenu, SearchIcon} from '../';

import './index.scss';

export const Header = () => {
  const {modalState, setModalState} = useState(false);

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