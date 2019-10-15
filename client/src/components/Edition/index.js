import React from 'react';
import { ProductsList } from '../ProductsList';

export const Edition = () => {
  const res = '"Apple Watch Edition"';
  return (
    <section className="container">
      <h2 className="page-title">Apple Watch Edition</h2>
      <ProductsList params={res} title="Apple Watch Edition" />
    </section>
  );
};
