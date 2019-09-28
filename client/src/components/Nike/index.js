import React from 'react';
import { ProductsList } from '../ProductsList';

export const Nike = () => {
  const res = '"Apple Watch Nike"'
  return (
    <section className="container">
      <h2 className='page-title'>Apple Watch Nike</h2>
      <ProductsList params={res} />
    </section>
  );
};