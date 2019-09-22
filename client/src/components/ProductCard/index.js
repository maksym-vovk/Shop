import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const ProductCard = props => {
  const { state } = props;
  console.log(state);
  return (
    <Link to={{ pathname: `/all/${state._id}`, state }}>
      <article className="product-card">
        <div className="product-card__image-wrapper">
          <img
            className="product-card__image"
            src={Object.entries(state.colors.bandImagesByColor)[0][1][0]}
            alt="apple-watch"
          />
        </div>
        <p className="product-card__description">
          {state.description.length > 40
            ? state.description.slice(0, 40).trim() + '...'
            : state.description}
        </p>
        <h3 className="product-card__price">
          <span>From $</span>
          {state.minPrice}
        </h3>
        <div className="product-card__colors-wrapper">
          {state.colors.allColors.slice(0, 4).map((item, index) => {
            return (
              <img
                key={index}
                alt={item.name}
                className="product-card__color-icons"
                src={item.icon}
              ></img>
            );
          })}
          {state.colors.allColors.length > 3 ? (
            <span style={{ marginTop: '-1px' }}>+</span>
          ) : null}
        </div>
      </article>
    </Link>
  );
};
