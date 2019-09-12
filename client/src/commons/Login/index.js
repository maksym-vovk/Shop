import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './index.scss';

export const Login = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const submitHandler = async() => {
    await axios.post(window.location.origin + '/customers/auth', {login, password})
      .then(res => {
        if (res.data.auth) {
          setError(false)
        } else {
          setError(true)
        }
      });
  }

  const el = <div className="outer" onClick={(e) => { if (e.target.className === 'outer') props.openModal(false) }}>
    <div className="modal">
      <span className="modal__close" onClick={() => props.openModal(false) }>&times;</span>
      <h2>Enter your account</h2>
      {error
        ? <div className="err-popup"><p>Wrong login or password</p></div>
        : null}
      <div className="modal__field">
        <label htmlFor="login">Login:</label>
        <input type="text" name="login" className="modal__input" onChange={ e => setLogin(e.target.value) } value={ login } />
      </div>
      <div className="modal__field">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" className="modal__input" onChange={ e => setPassword(e.target.value) } value={ password } />
      </div>
      <div className="modal__field">
        <button className="modal__submit" onClick={ () => submitHandler() }>Login</button>
      </div>
      <span>or</span>
      <Link to="/sign_up" onClick={() => props.openModal(false) }>Sign up</Link>
    </div>
  </div>

  return ReactDOM.createPortal(el, document.body)
}