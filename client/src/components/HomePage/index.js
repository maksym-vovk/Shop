import React from 'react';
import { connect } from 'react-redux';
import { HomePageSlider, ProductsList } from '../';

import { fetchCards } from '../../store';

import './style.scss';

export const HomePage = connect(null, { fetchCards })(props => {
  props.fetchCards();
  return (
    <div>
      <HomePageSlider />
      <ProductsList path="/watch" slice="5" />
    </div>
  );
});
