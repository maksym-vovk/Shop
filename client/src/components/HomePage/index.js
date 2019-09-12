import React from 'react';
import { HomePageSlider, ProductsList } from '../';
import './style.scss';

export const HomePage = props => {
  return (
    <div>
      <HomePageSlider />
      <ProductsList path="/watch" slice="5" />
    </div>
  );
};
