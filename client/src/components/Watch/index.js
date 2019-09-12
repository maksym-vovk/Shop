import React from 'react';
import axios from 'axios';
import './index.scss';
import { models } from './models';
import { ProductsList } from '../';

export const Watch = () => {
  const postData = async () => {
    await axios.post('/cards', models.model);
    // setFlag(!flag);
    console.log('posted');
  };
  return (
    <div>
      <h1>Watch</h1>
      {/* <button onClick={postData}>Click</button> */}
      <ProductsList path='/watch' />
    </div>
  );
};
