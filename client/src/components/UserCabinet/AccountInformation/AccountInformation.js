import React from 'react';
import {connect} from 'react-redux';
import {UserInformation} from './UserInformation';
import {UserSettings} from './UserSettings';
import './AccountInformation.scss';

import { logoutUser } from '../../../store';

const mapStateToProps = state => ({
  user: state.user
});

export const AccountInformation = connect(mapStateToProps, {logoutUser})(props => {
  return (
    <div className="container">
      {
        props.user.userData
          ? <div className="account-info addition-margin">
            <p className="account-info__title">Personal information</p>
            <div className="account-info__row">
              <UserInformation user={props.user.userData}/>
              <UserSettings logout={props.logoutUser}/>
            </div>
          </div>
          : <h1 className="addition-margin">404 Error you should login</h1>
      }
    </div>
  )
});