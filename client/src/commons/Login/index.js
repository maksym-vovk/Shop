import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

export const Login = () => {
  const el = <div className="outer">
    <div className="inner">
      <h2>Enter your account</h2>
      <label htmlFor="login">Email:</label>
      <input type="text" name="login" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" />
      <button>Login</button>
      <span>or</span>
      <button>Sign up</button>
    </div>
  </div>

  return ReactDOM.createPortal(el, document.body)
}