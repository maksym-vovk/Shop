import React from 'react';
import {Link} from 'react-router-dom';

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
                <li><Link className='link' className = 'link' to="/all">All Watch</Link></li>
                <li><Link className='link' to="/origin">Origin Watch</Link></li>
                <li><Link className='link' to="/nike">Nike Watch</Link></li>
                <li><Link className='link' to="/hermes">Hermès Watch</Link></li>
                <li><Link className='link' to="/edition">Edition Watch</Link></li>
              </ul>
            </div>
          </div>
          <div className='section__item'>
            <div>
              <h4 className='section__item--title'>Help</h4>
              <ul>
                <li><Link className='link' to='/'>Shipping and payment</Link></li>
                <li><Link className='link' to='/'>Warranty</Link></li>
                <li><Link className='link' to='/'>Purchase returns</Link></li>
                <li><Link className='link' to='/'>Service centres</Link></li>
                <li><Link className='link' to='/'>Questions and answers</Link></li>
              </ul>
            </div>
          </div>
          <div className='section__item section__product'>
            <div>
              <h4 className='section__item--title'>Information</h4>
              <ul>
                <li><Link className='link' to='/'>About Us</Link></li>
                <li><Link className='link' to='/'>Terms of Use</Link></li>
                <li><Link className='link' to='/'>Jobs</Link></li>
                <li><Link className='link' to='/'>Contacts</Link></li>
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