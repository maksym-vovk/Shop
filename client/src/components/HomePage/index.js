import React from 'react';
// import { connect } from 'react-redux';
import { HomePageSlider, ProductsList } from '../';

// import { fetchCards } from '../../store';

import './style.scss';

export const HomePage = props => {
  return (
    <div>
      <HomePageSlider />
      <ProductsList />
    </div>
  );
};

// export const HomePage = connect(null, { fetchCards })(props => {
//   props.fetchCards();
//   return (
//     <div>
//       <HomePageSlider />
//       <ProductsList  />
//     </div>
//   );
// });
