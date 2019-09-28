import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { ProductsList } from '../';
import { filterParams } from './filterParams';

import './index.scss';

export const Filter = () => {
  const [params, setParams] = useState({});
  const [key, setKey] = useState(true);
  const res = Object.entries(params).map(item => `"${item[1]}"`).join(' ') || 'Apple';
  console.log(res);
  console.log(key)
  const filterHandler = e => {
    const name = e.target.dataset.name;
    const text = e.target.innerText;

    if (e.target.dataset.status === 'true') {
      e.target.classList.remove('active');
      setParams(() => {
        delete params[name];
        return params;
      });
      e.target.dataset.status = 'false';
    } else {
      e.currentTarget.childNodes.forEach(element => {
        element.classList.remove('active');
        element.dataset.status = 'false';
      });
      e.target.classList.add('active');
      setParams({ ...params, [name]: text });
      e.target.dataset.status = 'true';
    }
    setKey(!key);
  };

  const resetHandler = () => {
    setParams({});
    setKey(!key);
    const elements = document.querySelectorAll('.filter__item');
    elements.forEach(item => {
      item.classList.remove('active');
      item.dataset.status = 'false';
    });
  };

  const filterTabs = filterParams.map((item, index) => {
    return (
      <article className="filter__block" key={index}>
        <h3 className="filter__title">{item.title}</h3>
        <ul className="filter__items-wrapper" onClick={filterHandler}>
          {item.body.map((elem, index) => {
            return (
              <li
                data-name={item.dataName}
                data-status="false"
                className="filter__item"
                key={index}
              >
                {elem}
              </li>
            );
          })}
        </ul>
      </article>
    );
  });

  return (
    <React.Fragment>
      <Collapsible trigger="Filter">
        <section className="filter">
          <button className="filter__reset-btn" onClick={resetHandler}>
            Reset
          </button>
          {filterTabs}
        </section>
      </Collapsible>
      <ProductsList params={res} key={key} />
    </React.Fragment>
  );
};
