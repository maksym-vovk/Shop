import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';

import './index.scss';
import { ProductsList } from '../';

export const Filter = () => {
  return (
    <React.Fragment>
      <Collapsible trigger="Filter">
        <section className="filter-wrapper">
          <button className='filter-reset-btn'>Reset</button>
          <article className='filter-block'>
            <h3 className='filter-block__title'>Model</h3>
            <ul className='filter-block__items-wrapper'>
              <li className='filter-block__item'>Apple Watch</li>
              <li className='filter-block__item'>Apple Watch Nike</li>
              <li className='filter-block__item'>Apple Watch Hermes</li>
              <li className='filter-block__item'>Apple Watch Edition</li>
            </ul>
          </article>
          <article className='filter-block'>
            <h3 className='filter-block__title'>Case Material</h3>
            <ul className='filter-block__items-wrapper'>
              <li className='filter-block__item'>Aluminum</li>
              <li className='filter-block__item'>Stainless Steel</li>
              <li className='filter-block__item'>Titanium</li>
              <li className='filter-block__item'>Ceramic</li>
            </ul>
          </article>
          <article className='filter-block'>
            <h3 className='filter-block__title'>Case Finish</h3>
            <ul className='filter-block__items-wrapper'>
              <li className='filter-block__item'>Space Gray</li>
              <li className='filter-block__item'>Silver</li>
              <li className='filter-block__item'>Gold</li>
              <li className='filter-block__item'>Space Black</li>
              <li className='filter-block__item'>White</li>
            </ul>
          </article>
          <article className='filter-block'>
            <h3 className='filter-block__title'>Band Type</h3>
            <ul className='filter-block__items-wrapper'>
              <li className='filter-block__item'>Sport Band</li>
              <li className='filter-block__item'>Sport Loop</li>
              <li className='filter-block__item'>Leather</li>
              <li className='filter-block__item'>Stainless Steel</li>
            </ul>
          </article>
        </section>
      </Collapsible>
      <ProductsList params={{}} />
    </React.Fragment>
  );
};
