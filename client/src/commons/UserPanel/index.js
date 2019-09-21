import React from 'react';
import { connect } from 'react-redux';

import { UserPanelModal } from './UserPanelModal';

const mapStateToProps = state => ({
  // name: state.user.userData.first_name,
  // surname: state.user.userData.last_name
})

export const UserPanel = connect(mapStateToProps)(props => {
  return (
    <UserPanelModal name={'Ivan'} surname={'Kravchenko'} logout={''} />
  )
})