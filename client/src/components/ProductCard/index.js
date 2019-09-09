import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const ProductCard = props => {
  console.log('props', props.state);
  const state = props.state;
  return (
    <Link to={'/' + state._id}>
      <article className="product-card">
        <div className="product-card__image-wrapper">
          <img src={state.images.mainImage} alt="apple-watch" />
        </div>
        <h3 className="product-card__title">{state.filter.title}</h3>
        <p className="product-card__subtitle">{state.filter.subTitle}</p>
        <p className="product-card__size">{state.filter.size}</p>
        <span className="product-card__description">
          {state.description.slice(0, 40) + '...'}
        </span>
        <h3 className="product-card__price">{state.filter.price}</h3>
      </article>
    </Link>
  );
};
