import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import './style.scss';

export const ProductCard = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  const fetchData = async () => {
    const result = await axios('/phones');
    console.log(result);
    setData(result.data);
  };

  const postData = async () => {
    await axios.post('/cards', {
      model: 'iMac 27"',
      price: 50000,
      color: ['red', 'green', 'pink'],
      image: [
        '/static/img/iMac/iMac_21.5/1.jpeg',
        '/static/img/iMac/iMac_21.5/2.jpeg',
        '/static/img/iMac/iMac_21.5/3.jpeg',
        '/static/img/iMac/iMac_21.5/4.jpeg',
        '/static/img/iMac/iMac_21.5/5.jpeg'
      ],
      description:
        '2-ядерный процессор Intel Core i5 седьмого поколения с тактовой частотой 2,3 ГГц (ускорение Turbo Boost до 3,6 ГГц)',
      category: 'phone',
      technicalInfo: [
        {
          title: 'Производитель',
          text: 'Apple'
        },
        {
          title: 'Модель',
          text: 'Mac 27 дюймов'
        },
        {
          title: 'Память',
          text: '8 ГБ DDR4 2133 МГц'
        },
        {
          title: 'Графический процессор',
          text: 'Intel Iris Plus Graphics 640'
        },
        {
          title: 'Жёсткий диск',
          text: 'Serial ATA 5400 об/мин ёмкостью 1 ТБ'
        }
      ],
      warehouseCount: 10
    });
    // setFlag(!flag);
  };
  return (
    <Link to="/" className="product-card">
      <div className="product-card-image">
        <img src="/static/img/watches/series-4/1.jpg" alt="apple-watch" />
      </div>
      <p className="product-card__title">{
        data[0] ?
          data[0].model :
          null
      }</p>
      <p className="product-card__subtitle">GPS + CELLULAR</p>
      <span className="product-card__description">
        Stainless Steel Case with Bleu Indigo Swift Leather Double Tour
      </span>
      <h3 className="product-card__price">1399</h3>
    </Link>
  );
};