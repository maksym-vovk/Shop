import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const UserPanelModal = props => {
  const useOutsideClick = (ref) => {
    const clickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.modal(false);
      }
    }
    useEffect(() => {
      document.addEventListener('mousedown', clickOutside)
      return () => {
        document.removeEventListener('mousedown', clickOutside)
      }
    })
  }

  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef)
  return (
    <div className="user-modal" ref={wrapperRef}>
      <div className="user-modal__name-block">
        <p className="user-modal__name-text">{props.name}</p>
        <p className="user-modal__name-text">{props.surname}</p>
      </div>
      <div className="user-modal__link-block">
        <Link to="/order_history" className="user-modal__link user-modal__link--margin" onClick={() => props.modal(false)}>Orders history</Link>
        <Link to="/user_cabinet" className="user-modal__link" onClick={() => props.modal(false)}>Account</Link>
      </div>
      <div className="user-modal__logout-block">
        <button className="user-modal__logout" onClick={props.logout}>Sign out</button>
      </div>
    </div>
  )
}