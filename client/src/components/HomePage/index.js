import React, { useState, useEffect } from 'react';
import { Lines } from 'react-preloaders';
import { HomePageSlider } from '../';

import './style.scss';

export const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = 'Apple Watch';
    setLoading(false);
  }, []);
  return (
    <div>
      <HomePageSlider />
      <Lines customLoading={loading} time={300} />
    </div>
  );
};
