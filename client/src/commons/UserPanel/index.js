import React from 'react';
import { connect } from 'react-redux';

import { UserPanelModal } from './UserPanelModal';
import { logoutUser } from '../../store';

const mapStateToProps = state => ({
  name: state.user.userData.first_name,
  surname: state.user.userData.last_name
})

export const UserPanel = connect(mapStateToProps, { logoutUser })(props => {
  return (
    <UserPanelModal
      name={props.name}
      surname={props.surname}
      logout={props.logoutUser}
      modal={props.openModal}
    />
  )
})