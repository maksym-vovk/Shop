import React, { useEffect } from 'react';
import { Filter } from '../';

export const All = () => {
  useEffect(() => {
    document.title = 'Apple Watch Series 5';
  }, []);
  return (
    <section className="container">
      <h2 className="page-title">Apple Watch Series 5</h2>
      <Filter />
    </section>
  );
};
