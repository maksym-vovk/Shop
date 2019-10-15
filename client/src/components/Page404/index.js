import React from 'react';

import { EmptyPage } from '../EmptyPage';

export const Page404 = () => {
  return (
    <section className="container">
      <EmptyPage button={true} text="404 Error"/>
    </section>
  );
};