import React from 'react';

import { connect } from 'react-redux';
import {ShoppingInfoContainer} from './ShoppingInfo/ShoppingInfoContainer';
import {AccountInformation} from './AccountInformation/AccountInformation'

import './index.scss'
import { EmptyPage } from '../EmptyPage';
import { Preloader } from '../Preloader';

const mapStateToProps = state => ({
  authorized: state.user.authorized,
  userData: state.user.userData
});

export const UserCabinet = connect(mapStateToProps)(props => {
  const {authorized, userData} = props;

  return (
    <React.Fragment>
      {
        authorized ? (
          <React.Fragment>
            <AccountInformation userData={userData}/>
            <ShoppingInfoContainer/>
          </React.Fragment>
        )

          : <EmptyPage text="You should login to see this page"/>
      }
      <Preloader />
    </React.Fragment>

  )
});