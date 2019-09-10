import React, { useState } from 'react';
import {EmptyCart, FullCart} from '../index.js';

import './index.scss'

export const Cart = () => {
  const [state, setState] = useState(false);

  return (
  // state ?
    <div className='container container-cart'>
      <FullCart/>
      {/* <EmptyCart/> */}
    </div>
  )
};