import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';

import './index.scss';
import { ProductsList } from '../';

export const Filter = () => {
  return (
    <React.Fragment>
      <Collapsible trigger="Filter">
        <section className="filter-wrapper">
          <p>Reset</p>
          <article>
            <h3>Model</h3>
            <ul>
              <li>Apple Watch</li>
              <li>Apple Watch Nike</li>
              <li>Apple Watch Hermes</li>
              <li>Apple Watch Edition</li>
            </ul>
          </article>
          <article>
            <h3>Case Material</h3>
            <ul>
              <li>Aluminum</li>
              <li>Stainless Steel</li>
              <li>Titanium</li>
              <li>Ceramic</li>
            </ul>
          </article>
          <article>
            <h3>Case Finish</h3>
            <ul>
              <li>Space Gray</li>
              <li>Silver</li>
              <li>Gold</li>
              <li>Space Black</li>
              <li>White</li>
            </ul>
          </article>
          <article>
            <h3>Band Type</h3>
            <ul>
              <li>Sport Band</li>
              <li>Sport Loop</li>
              <li>Leather</li>
              <li>Stainless Steel</li>
            </ul>
          </article>
        </section>
      </Collapsible>
      <ProductsList params={{}} />
    </React.Fragment>
  );
};
