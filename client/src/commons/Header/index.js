import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {Logo, MainMenu, Extras, SearchInput, HamburgerMenuIcon, UserMenuMedia, SecondaryMenu } from '../';

import './index.scss';

const mapStateToProps = state => ({
  status: state.search.searchStatus
});

export const Header = connect(mapStateToProps)(props => {
  return (
    <header className='page-header'>
      <div className='page-header__wrapper container'>
        <HamburgerMenuIcon/>
        <Logo/>
        { props.status
          ? <SearchInput/>
          : <MainMenu/>
        }
        <UserMenuMedia/>
        <Extras/>
      </div>
      <SecondaryMenu/>
    </header>
  );
});
