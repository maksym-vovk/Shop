import React from 'react';
import { ProductsList } from '../ProductsList';

export const Hermes = () => {
  const res = '"Apple Watch Hermes"';

  return (
    <section className="container">
      <h2 className='page-title'>Apple Watch Hermes</h2>
      <ProductsList params={res} />
    </section>
  );
};
