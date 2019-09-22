import React, { useState } from 'react';
import { Login } from '../';
// import { connect } from 'react-redux';
import './index.scss';

export const Auth = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div>
      <div className='auth' onClick={() => {
        setModalState(true)
      }}>
        <svg className='auth__image extras__image'
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 612 612"
          version="1.1"
          viewBox="0 0 612 612"
          xmlSpace="preserve"
        >
          <path
            d="M331.685 425.378c-7.478 7.479-7.478 19.584 0 27.043 7.479 7.478 19.584 7.478 27.043 0l131.943-131.962c3.979-3.979 5.681-9.276 5.412-14.479.269-5.221-1.434-10.499-5.412-14.477L358.728 159.56c-7.459-7.478-19.584-7.478-27.043 0-7.478 7.478-7.478 19.584 0 27.042l100.272 100.272H19.125C8.568 286.875 0 295.443 0 306s8.568 19.125 19.125 19.125h412.832L331.685 425.378zM535.5 38.25H153c-42.247 0-76.5 34.253-76.5 76.5v76.5h38.25v-76.5c0-21.114 17.117-38.25 38.25-38.25h382.5c21.133 0 38.25 17.136 38.25 38.25v382.5c0 21.114-17.117 38.25-38.25 38.25H153c-21.133 0-38.25-17.117-38.25-38.25v-76.5H76.5v76.5c0 42.247 34.253 76.5 76.5 76.5h382.5c42.247 0 76.5-34.253 76.5-76.5v-382.5c0-42.247-34.253-76.5-76.5-76.5z"/>
        </svg>
      </div>
      {modalState
        ? <Login openModal={setModalState}/>
        : null}
    </div>

  )
};
