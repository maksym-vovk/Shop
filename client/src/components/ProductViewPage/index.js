import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';

export const ProductViewPage = props => {
  // console.log('props', props);
  const [data, setData] = useState();
  const [mainImg, setMainImg] = useState();

  const fetchData = async id => {
    const result = await axios(`/cards/${id}`);
    setData(result.data[0]);
  };

  const res = {
    params: {
      // 'filter.category': 'watch',
      // 'filter.size': '40mm',
      // 'filter.bandType': 'Sport',
      // 'filter.bandColor': 'white',
      // 'filter.caseMaterial': 'Aluminium',
    }
  };

  const getDataAxios = async res => {
    const response = await axios.get('/cards', res);
    console.log('response', response.data);
  };

  // getDataAxios(res);

  useEffect(() => {
    fetchData(props.match.params.id);
  }, [props.match.params.id]);
  // console.log('data', data);

  const tabsHandler = e => {
    // console.log(e.target.dataset.src);
    setMainImg(e.target.dataset.src);
  };

  const Tabs = () => {
    return data ? (
      <div className="tabs-images">
        {data.images.tabsImages.map((item, index) => {
          return (
            <img
              key={index}
              alt={data.model}
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
  let flag = false;
  let flag2 = false;
  return (
    <section className="product-view">
      <button
        onClick={() => {
          flag
            ? delete res.params['filter.size']
            : (res.params['filter.size'] = '40mm');
          console.log(flag);
          getDataAxios(res);
          flag = !flag;
        }}
      >
        size
      </button>
      <button
        onClick={() => {
          flag2
            ? delete res.params['filter.bandType']
            : (res.params['filter.bandType'] = 'Sport');
          console.log(res);
          getDataAxios(res);
          flag2 = !flag2;
        }}
      >
        band
      </button>
      <article className="product-view-wrapper container">
        <div className="product-view__images">
          {data ? (
            <div className="main-image">
              <img
                alt={data.model}
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
