import React from 'react';
import {connect} from 'react-redux';
import {UserInformation} from './UserInformation';
import {UserSettings} from './UserSettings';
import './AccountInformation.scss';

import { logoutUser } from '../../../store';

export const AccountInformation = connect(null, {logoutUser})(props => {
  const { userData, logoutUser } = props;
  return (
    <div className="container">
      <div className="account-info addition-margin">
        <p className="account-info__title">Personal information</p>
        <div className="account-info__row">
          <UserInformation user={userData}/>
          <UserSettings logout={logoutUser}/>
        </div>
      </div>
    </div>
  )
});