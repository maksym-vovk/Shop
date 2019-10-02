import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Collapse} from 'react-collapse'

import { Logo, MainMenu, Extras, SearchInput } from '../';

import './index.scss';

const mapStateToProps = state => ({
  status: state.search.searchStatus
});

// const collapse = () => {
//     const menu = document.querySelector('.main-menu');
//     const header = document.querySelector('.header');
//
//     if (menu.style.maxHeight) {
//         menu.style.maxHeight = null;
//         setTimeout(() => {header.style.overflow = 'hidden';}, 1000)
//     }
//     else {
//         header.style.overflow = 'unset';
//         // menu.style.maxHeight = menu.scrollHeight + 'vh';
//         menu.style.maxHeight = 100 + 'vh';
//         menu.style.height = 100 + 'vh';
//     }
// }

const Test = () => {

    return (
        <React.Fragment>


        </React.Fragment>
    )
}
export const Header = connect(mapStateToProps)(props => {
    const [isOpened, openStatus] = useState(false);


    return (
    <header className="header">
      <div className="header__wrapper container">

          <button type="button" onClick={() => openStatus(!isOpened)} className="test">burger</button>

          <Collapse className="collapse-menu" isOpened={isOpened}>
              <MainMenu style={{height: '50vh'}}/>
          </Collapse>
          <Logo />
          {
              window.screen.width <= 1000 && window.screen.height <= 1000
                  ?  null
                  : <MainMenu/>

          }
        {props.status ? <SearchInput /> : null}
        <Extras />
      </div>
    </header>
  );
});
