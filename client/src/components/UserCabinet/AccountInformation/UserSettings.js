import React from 'react';
import {Link} from 'react-router-dom';

export const UserSettings = () => {
  return (
    <ul className="user-settings">
      <li className="user-settings__item">
        <Link to="/edit_account_information" className="user-settings__item__link">
            Change personal information
        </Link>
      </li>
      <li className="user-settings__item">
        <Link to="/edit_account_password" className="user-settings__item__link">
            Change password
        </Link>
      </li>
      <li className="user-settings__item">
        <Link to="/" className="user-settings__item__link user-settings__item__link--exit">
            Log out
        </Link>
      </li>
    </ul>
  )
};