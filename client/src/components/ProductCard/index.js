import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export const ProductCard = props => {
  console.log('props', props);
  const state = props.state;
  console.log(state.image[0]);
  return (
    <Link to={'/' + state._id} className="product-card">
      <div className="product-card-image">
        <img src={state.image[0]} alt="apple-watch" />
      </div>
      <h3 className="product-card__title">{state.model}</h3>
      <p className="product-card__subtitle">GPS + CELLULAR</p>
      <span className="product-card__description">
        {state.description}
      </span>
      <h3 className="product-card__price">1399</h3>
    </Link>
  );
};
