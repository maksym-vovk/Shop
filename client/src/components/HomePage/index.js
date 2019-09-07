import React from 'react';
import { HomePageSlider, ProductsList } from '../';
import './style.scss';

export const HomePage = props => {
  return (
    <div>
      <HomePageSlider />
      <ProductsList />
      <div className="home-page container">
       
      </div>
    </div>
  );
};
