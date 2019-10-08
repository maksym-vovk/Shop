import React, { useState, useEffect } from 'react';
import { Lines } from 'react-preloaders';

export const Preloader = ({time = 400}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, []);

  return (
    <Lines customLoading={loading} time={time}/>
  )
};