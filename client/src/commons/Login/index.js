import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './index.scss';

export const Login = (props) => {
  const el = <div className="outer" onClick={(e) => { if (e.target.className === 'outer') props.openModal(false) }}>
    <div className="modal">
      <span className="modal__close" onClick={() => props.openModal(false) }>&times;</span>
      <h2>Enter your account</h2>
      <div className="modal__field">
        <label htmlFor="login">Login:</label>
        <input type="text" name="login" className="modal__input" />
      </div>
      <div className="modal__field">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" className="modal__input" />
      </div>
      <div className="modal__field">
        <button className="modal__submit">Login</button>
      </div>
      <span>or</span>
      <Link to="/sign_up" onClick={() => props.openModal(false) }>Sign up</Link>
    </div>
  </div>

  return ReactDOM.createPortal(el, document.body)
}