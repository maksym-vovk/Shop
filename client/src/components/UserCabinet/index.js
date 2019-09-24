import React from 'react';

import {ShoppingInfoContainer} from './ShoppingInfo/ShoppingInfoContainer';
import {AccountInformation} from './AccountInformation/AccountInformation'

import './index.scss'

export const UserCabinet = () => {
  return (
    <div>
      <AccountInformation/>
      <ShoppingInfoContainer/>
    </div>
  )
};