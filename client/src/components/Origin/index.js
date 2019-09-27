import React from 'react';
import { ProductsList } from '../ProductsList';

export const Origin = () => {
  return (
    <section className="container">
      <h2 className="page-title">Apple Watch Origin</h2>
      <ProductsList
        params={{
          'filter.model': 'Apple Watch Origin'
        }}
      />
    </section>
  );
};
