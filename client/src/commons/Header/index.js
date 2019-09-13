import React from 'react';
import {connect} from 'react-redux'
import {Logo, MainMenu, Extras, SearchInput, } from '../';
import './index.scss';
import store, {getLoginState} from '../../store';

const mapStateToProps = (state) => ({
  status: state.searchStatus.status
});

export const Header = connect(mapStateToProps)((props) => {
  return (
    <header className='page-header'>
      <div className='page-header__wrapper container'>
        <Logo/>
        { props.status
          ? <SearchInput/>
          : <MainMenu/>
        }
        <Extras/>
      </div>
    </header>
  );
});
