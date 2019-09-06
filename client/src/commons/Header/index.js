import React, {useState} from 'react';
import {Logo, MainMenu, SearchIcon, Login} from '../';

import './index.scss';

export const Header = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <header>
      <div className='container'>
        <Logo/>
        <MainMenu/>
        <SearchIcon openModal={setModalState}/>
        {modalState
          ? <Login openModal={setModalState}/>
          : null}
      </div>
    </header>
  );
};