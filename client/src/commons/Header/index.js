import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Logo, MainMenu, Extras, SearchInput } from '../';
import { fetchCards } from '../../store';
import './index.scss';

const mapStateToProps = state => ({
  status: state.searchStatus.status
});

export const Header = connect(
  mapStateToProps,
  { fetchCards }
)(props => {
  useEffect(() => {
    const { fetchCards } = props;
    fetchCards();
  }, [props]);

  return (
    <header className="page-header">
      <div className="page-header__wrapper container">
        <Logo />
        {props.status ? <SearchInput /> : <MainMenu />}
        <Extras />
      </div>
    </header>
  );
});
