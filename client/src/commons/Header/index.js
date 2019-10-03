import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';
import { withRouter } from 'react-router-dom';

import { Logo, MainMenu, Extras, SearchInput } from '../';

import './index.scss';

const mapStateToProps = state => ({
  status: state.search.searchStatus
});

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const Header = withRouter(
  connect(mapStateToProps)(props => {
    const { width } = useWindowDimensions();
    const [isOpened, openStatus] = useState(false);

    props.history.listen((location, action) => {
      openStatus(false);
    });

    return (
      <header className="header">
        <div className="header__wrapper container">
          <button
            type="button"
            onClick={() => openStatus(!isOpened)}
            className="burger-button"
          >
            <div className="close-line"></div>
            <div className="close-line"></div>
          </button>

          <Logo />
          {width <= 768 ? (
            <Collapse className="collapse-menu" isOpened={isOpened}>
              <MainMenu />
            </Collapse>
          ) : (
            <React.Fragment>
              {props.status ? <SearchInput /> : <MainMenu />}
            </React.Fragment>
          )}
          <Extras />
        </div>
      </header>
    );
  })
);
