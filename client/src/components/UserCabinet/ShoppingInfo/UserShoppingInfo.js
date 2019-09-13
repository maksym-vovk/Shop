import React from 'react';
import {Link} from 'react-router-dom';

export const UserShoppingInfo = ({title, description, link, linkName}) => {
  return (
    <div className="shop-info">
      <p className="shop-info__title">{title}</p>
      <p className="shop-info__description shop-info--margin">{description}</p>
      <Link className="shop-info__link user-info--margin" to={link}>{linkName}</Link>
    </div>
  )
}