import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';

import { ProductCard } from '../';

export const ProductsList = props => {
  console.log('props', props);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios(props.path);
    // console.log(result.data);
    setData(result.data);
  };

  return (
      <section className="product-list-wrapper container">
        {props.slice?
        data.slice(0, props.slice).map((item, index) => {
          return <ProductCard key={index} state={item} />;
        }):
        data.map((item, index) => {
          return <ProductCard key={index} state={item} />;
        })
        }
      </section>
  );
};
