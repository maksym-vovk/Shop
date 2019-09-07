import React from 'react';
import { HomePageSlider } from '../Slider';
import {ProductCard} from '../ProductCard'
import './style.scss';

export const HomePage = props => {
  return (
    <div>
      <HomePageSlider />
      <div className="home-page container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
