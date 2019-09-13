import React from 'react';
import {UserInformation} from './UserInformation';
import {UserSettings} from './UserSettings';
import './AccountInformation.scss'

export const AccountInformation = () => {
  const testUser = {
    first_name: 'test',
    last_name: 'test last name',
    address: 'test address',
    city: 'test city',
    zip_code: 'test zip code',
    email: 'test email',
    phone: '+380934120933',
  };

  return (
    <div className="container">
      <div className="account-info addition-margin">
        <p className="account-info__title">Personal information</p>
        <div className="account-info__row">
          <UserInformation user={testUser}/>
          <UserSettings/>
        </div>
      </div>
    </div>
  )
};