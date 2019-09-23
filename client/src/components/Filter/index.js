import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { ProductsList } from '../';

import './index.scss';

export const Filter = () => {
  const [params, setParams] = useState({});
  const [key, setKey] = useState(true);

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

  return (
    <React.Fragment>
      <Collapsible trigger="Filter">
        <section className="filter">
          <button className="filter__reset-btn" onClick={resetHandler}>
            Reset
          </button>
          <article className="filter__block">
            <h3 className="filter__title">Model</h3>
            <ul className="filter__items-wrapper" onClick={filterHandler}>
              <li data-name="filter.model" className="filter__item">
                Apple Watch Origin
              </li>
              <li data-name="filter.model" className="filter__item">
                Apple Watch Nike
              </li>
              <li data-name="filter.model" className="filter__item">
                Apple Watch Hermes
              </li>
              <li data-name="filter.model" className="filter__item">
                Apple Watch Edition
              </li>
            </ul>
          </article>
          <article className="filter__block">
            <h3 className="filter__title">Case Material</h3>
            <ul className="filter__items-wrapper" onClick={filterHandler}>
              <li data-name="filter.caseMaterial" className="filter__item">
                Aluminum
              </li>
              <li data-name="filter.caseMaterial" className="filter__item">
                Stainless Steel
              </li>
              <li data-name="filter.caseMaterial" className="filter__item">
                Titanium
              </li>
              <li data-name="filter.caseMaterial" className="filter__item">
                Ceramic
              </li>
            </ul>
          </article>
          <article className="filter__block">
            <h3 className="filter__title">Case Finish</h3>
            <ul className="filter__items-wrapper" onClick={filterHandler}>
              <li data-name="filter.caseFinish" className="filter__item">
                Space Gray
              </li>
              <li data-name="filter.caseFinish" className="filter__item">
                Silver
              </li>
              <li data-name="filter.caseFinish" className="filter__item">
                Gold
              </li>
              <li data-name="filter.caseFinish" className="filter__item">
                Space Black
              </li>
              <li data-name="filter.caseFinish" className="filter__item">
                White
              </li>
            </ul>
          </article>
          <article className="filter__block">
            <h3 className="filter__title">Band Type</h3>
            <ul className="filter__items-wrapper" onClick={filterHandler}>
              <li data-name="filter.bandType" className="filter__item">
                Sport Band
              </li>
              <li data-name="filter.bandType" className="filter__item">
                Sport Loop
              </li>
              <li data-name="filter.bandType" className="filter__item">
                Leather
              </li>
              <li data-name="filter.bandType" className="filter__item">
                Stainless Steel
              </li>
            </ul>
          </article>
        </section>
      </Collapsible>
      <ProductsList params={params} key={key} />
    </React.Fragment>
  );
};
