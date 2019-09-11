import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';

import { ProductCard } from '../';

export const ProductsList = props => {
  console.log('props', props);
  const [data, setData] = useState([]);
  const path = '/cards';
  useEffect(() => {
    fetchData(path);
  }, [path]);
  const fetchData = async path => {
    const result = await axios(path);
    console.log(result.data);
    setData(result.data);
  };

  return (
    <section className="product-list-wrapper container">
      {data.map((item, index) => {
        console.log(item);
        return <ProductCard state={item} key={index}/>
      })}
    </section>
  );
};
