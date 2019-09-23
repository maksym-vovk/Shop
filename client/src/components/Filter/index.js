import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import { ProductsList } from '../';

import './index.scss';

export const Filter = () => {
  const [params, setParams] = useState({});

  const filterHandler = e => {
    const name = e.target.dataset.name;
    const text = e.target.innerText;
    setParams({ ...params, [name]: text });
  };

  const resetHandler = () => {
    setParams({});
  };

  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <React.Fragment>
      <Collapsible trigger="Filter" open={true}>
        <section className="filter">
          <button className="filter__reset-btn" onClick={resetHandler}>
            Reset
          </button>
          <article className="filter__block">
            <h3 className="filter__title">Model</h3>
            <ul className="filter__items-wrapper" onClick={filterHandler}>
              <li data-name="filter.model" className="filter__item active">
                Apple Watch
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
      <ProductsList params={params} />
    </React.Fragment>
  );
};
