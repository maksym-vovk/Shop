import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import { ProductsList } from '../';

import './index.scss';

export const Filter = () => {
  return (
    <React.Fragment>
      <Collapsible trigger="Filter" open={true}>
        <section className="filter">
          <button className="filter__reset-btn">Reset</button>
          <article className="filter__block">
            <h3 className="filter__title">Model</h3>
            <ul className="filter__items-wrapper">
              <li className="filter__item active">Apple Watch</li>
              <li className="filter__item">Apple Watch Nike</li>
              <li className="filter__item">Apple Watch Hermes</li>
              <li className="filter__item">Apple Watch Edition</li>
            </ul>
          </article>
          <article className="filter__block">
            <h3 className="filter__title">Case Material</h3>
            <ul className="filter__items-wrapper">
              <li className="filter__item">Aluminum</li>
              <li className="filter__item">Stainless Steel</li>
              <li className="filter__item">Titanium</li>
              <li className="filter__item">Ceramic</li>
            </ul>
          </article>
          <article className="filter__block">
            <h3 className="filter__title">Case Finish</h3>
            <ul className="filter__items-wrapper">
              <li className="filter__item">Space Gray</li>
              <li className="filter__item">Silver</li>
              <li className="filter__item">Gold</li>
              <li className="filter__item">Space Black</li>
              <li className="filter__item">White</li>
            </ul>
          </article>
          <article className="filter__block">
            <h3 className="filter__title">Band Type</h3>
            <ul className="filter__items-wrapper">
              <li className="filter__item">Sport Band</li>
              <li className="filter__item">Sport Loop</li>
              <li className="filter__item">Leather</li>
              <li className="filter__item">Stainless Steel</li>
            </ul>
          </article>
        </section>
      </Collapsible>
      <ProductsList params={{}} />
    </React.Fragment>
  );
};
