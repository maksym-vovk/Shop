import React from 'react';
import { ProductsList } from '../ProductsList';

export const Edition = () => {
  return (
    <section className="container">
      <h2 className='page-title'>Apple Watch Edition</h2>
      <ProductsList model="Apple Watch Edition"/>
    </section>
  );
};
