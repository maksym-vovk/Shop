import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import './index.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='section'>
          <div className='section__item'>
            <div>
              <h4 className='section__item--title'>Menu</h4>
              <ul>
                <li><Link to="/all">All Watch</Link></li>
                <li><Link to="/origin">Origin Watch</Link></li>
                <li><Link to="/nike">Nike Watch</Link></li>
                <li><Link to="/hermes">Hermès Watch</Link></li>
                <li><Link to="/edition">Edition Watch</Link></li>
              </ul>
            </div>
          </div>
          <div className='section__item'>
            <div>
              <h4 className='section__item--title'>Help</h4>
              <ul>
                <li><Link to='/'>Shipping and payment</Link></li>
                <li><Link to='/'>Warranty</Link></li>
                <li><Link to='/'>Purchase returns</Link></li>
                <li><Link to='/'>Service centres</Link></li>
                <li><Link to='/'>Questions and answers</Link></li>
              </ul>
            </div>
          </div>
          <div className='section__item section__product'>
            <div>
              <h4 className='section__item--title'>Information</h4>
              <ul>
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/'>Terms of Use</Link></li>
                <li><Link to='/'>Jobs</Link></li>
                <li><Link to='/'>Contacts</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <span className='footer__copyright footer__sub-text'>
                Copyright © 2019. All rights reserved.
        </span>
      </div>
    </footer>
  )
};