import React from 'react';

export const UserInformation = ({user}) => {
  return (
    <div className="user-information-item">

      <div className="user-information-item__row">
        <div className="user-information-item__user-info user-information-item__title">Login</div>
        <div className="user-information-item__user-info">{user.login}</div>
      </div>
      <div className="user-information-item__row">
        <div className="user-information-item__user-info user-information-item__title">Name</div>
        <div className="user-information-item__user-info">{user.first_name}</div>
      </div>
      <div className="user-information-item__row">
        <div className="user-information-item__user-info user-information-item__title">Surname</div>
        <div className="user-information-item__user-info">{user.last_name}</div>
      </div>
      {
        user.age ? (
          <div className="user-information-item__row">
            <div className="user-information-item__user-info user-information-item__title">Age</div>
            <div className="user-information-item__user-info">{user.age}</div>
          </div>
        )
          : null
      }

      {
        user.country ? (
          <div className="user-information-item__row">
            <div className="user-information-item__user-info user-information-item__title">Country</div>
            <div className="user-information-item__user-info">{user.country}</div>
          </div>
        )
          : null
      }

      {
        user.city ? (
          <div className="user-information-item__row">
            <div className="user-information-item__user-info user-information-item__title">City</div>
            <div className="user-information-item__user-info">{user.city}</div>
          </div>
        )
          : null
      }

      {
        user.zip_code ? (
          <div className="user-information-item__row">
            <div className="user-information-item__user-info user-information-item__title">Zip code</div>
            <div className="user-information-item__user-info">{user.zip_code}</div>
          </div>
        )
          : null
      }

      {
        user.address ? (
          <div className="user-information-item__row">
            <div className="user-information-item__user-info user-information-item__title">Address</div>
            <div className="user-information-item__user-info">{user.address}</div>
          </div>
        )
          : null
      }

      <div className="user-information-item__row">
        <div className="user-information-item__user-info user-information-item__title">Email</div>
        <div className="user-information-item__user-info">{user.email}</div>
      </div>
      <div className="user-information-item__row">
        <div className="user-information-item__user-info user-information-item__title">Phone</div>
        <div className="user-information-item__user-info">{user.phone}</div>
      </div>

    </div>
  )
};