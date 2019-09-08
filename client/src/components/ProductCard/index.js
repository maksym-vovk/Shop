import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const ProductCard = props => {
  console.log('props', props);
  const state = props.state;
  // console.log(state.image[0]);
  return (
    <Link to={'/' + state._id}>
      <article className="product-card">
        <div className="product-card__image-wrapper">
          <img src={state.images.mainImage} alt="apple-watch" />
        </div>
        <h3 className="product-card__title">{state.model}</h3>
        <p className="product-card__subtitle">{state.connectivity}</p>
        <span className="product-card__description">{state.description}</span>
        <h3 className="product-card__price">{state.price}</h3>
      </article>
    </Link>
  );
};
