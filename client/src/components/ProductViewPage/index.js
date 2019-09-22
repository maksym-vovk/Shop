import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Lines } from 'react-preloaders';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.scss';

export const ProductViewPage = props => {
  const { state } = props.location;
  const [slides, setSlides] = useState(
    Object.entries(state.colors.bandImagesByColor)[0][1]
  );
  const [colorTitle, setColorTitle] = useState(
    Object.entries(state.colors.bandImagesByColor)[0][0]
      .split('_')
      .join(' ')
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  const sliderImages = slides.map((item, key) => {
    return (
      <div key={key}>
        <img src={item} alt={state.filter.category} style={{ width: '100%' }} />
      </div>
    );
  });

  const tabClickHandler = e => {
    const images = state.colors.bandImagesByColor;
    const data = e.target.dataset.name;
    setSlides(images[data]);
    setColorTitle(e.target.title);
  };

  const ColorTabs = () => {
    return (
      <div className="tabs-wrapper">
        {state.colors.allColors.map((item, index) => {
          return (
            <span key={index} onClick={tabClickHandler} className="tabs">
              <img
                src={item.icon}
                alt={item.name}
                title={item.name}
                data-name={item.dataName}
              />
            </span>
          );
        })}
      </div>
    );
  };

  const techInfo = object => {
    const info = [];
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        info.push(
          <div key={key}>
            <h3>{object[key].title}</h3>
            <ul className="tech-info">
              {object[key].body.map((item, key) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>
          </div>
        );
      }
    }
    return info;
  };

  return (
    <section className="product-view">
      <article className="container">
        <h2 className="page-title">Apple Watch Series 5</h2>
        <div className="product-view__wrapper">
          <div className="product-view__carousel">
            <Carousel showIndicators={false}>{sliderImages}</Carousel>
          </div>
          <div className="product-view__info">
            <h3 className="category-title">{state.filter.model}</h3>
            <h2 className="product-title">{state.description}</h2>
            <h4 className="product-price">
              <span className="product-price-span">Price: </span>$
              {state.minPrice}
            </h4>
            <h4 className="tabs-title">Band Colors</h4>
            <p className="color-title">{colorTitle}</p>
            <ColorTabs />
            <button className="buy-btn">Add to cart</button>
          </div>
        </div>
        <div className="tech-info-wrapper">{techInfo(state.techSpecs)}</div>
      </article>
      <Lines customLoading={loading} time={300} />
    </section>
  );
};
