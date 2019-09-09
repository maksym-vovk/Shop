import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';

export const ProductViewPage = props => {
  // console.log('props', props);
  const [data, setData] = useState();
  const [mainImg, setMainImg] = useState();
  const fetchData = async id => {
    const result = await axios(`/cards/${id}`);
    // console.log(result.data[0].images.tabsImages)
    setData(result.data[0]);
  };

  useEffect(() => {
    fetchData(props.match.params.id);
  }, [props.match.params.id]);
  console.log(data);

  const tabsHandler = e => {
    console.log(e.target.dataset.src);
    setMainImg(e.target.dataset.src);
  };

  const Tabs = () => {
    return data ? (
      <div className="tabs-images">
        {data.images.tabsImages.map((item, index) => {
          return (
            <img
              onMouseEnter={tabsHandler}
              data-src={item}
              style={{
                width: '10%'
              }}
              src={item}
            />
          );
        })}
      </div>
    ) : null;
  };

  return (
    <section className="product-view">
      <article className="product-view-wrapper container">
        <div className="product-view__images">
          {data ? (
            <div className="main-image">
              <img
                style={{
                  width: '70%'
                }}
                src={mainImg || data.images.tabsImages[0]}
              />
            </div>
          ) : null}
          <Tabs />
        </div>
        <div className="product-view__description">
          {data ? <h2>{data.description}</h2> : null}
        </div>
      </article>
    </section>
  );
};
