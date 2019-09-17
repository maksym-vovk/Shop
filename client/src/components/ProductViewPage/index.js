import React, { useState, useEffect } from 'react';
import { Lines } from 'react-preloaders';
import { connect } from 'react-redux';
import { fetchCard } from '../../store/actions';
import './index.scss';

const mapStateToProps = state => {
  return {
    card: state.products.card
  };
};

export const ProductViewPage = connect(
  mapStateToProps,
  { fetchCard }
)(props => {
  const { card, fetchCard } = props;
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState();

  useEffect(() => {
    fetchCard(props.match.params.id);
    setLoading(false);
  }, [fetchCard, props.match.params.id]);

  console.log('card', card);
  // console.log('images', images);
  console.log('props', props);

  const Slider = () => {
    return (
      images || Object.entries(card[0].colors.bandImagesByColor)[0][1]
    ).map((item, index) => {
      return (
        <img src={item} key={index} alt="watch" style={{ width: '50%' }} />
      );
    });
  };

  const tabClickHandler = e => {
    // console.log(e.target.dataset.name)
    const data = e.target.dataset.name;
    console.log(data);
    setImages(card[0].colors.bandImagesByColor[data]);
  };

  const ColorTabs = () => {
    return (
      <div>
        {card[0].colors.allColors.map((item, index) => {
          return (
            <span key={index} onClick={tabClickHandler}>
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

  return (
    <React.Fragment>
      {card ? (
        <section className="product-view" style={{ padding: '10px 0' }}>
          <div className="container">
            <h2 style={{ textAlign: 'left' }}>{card[0].filter.model}</h2>
          </div>
          <hr style={{ opacity: '0.5' }} />
          <article className="product-view__item   container">
            <div style={{width:'100%'}}>
              <Slider />
            </div>
            <div style={{ padding: '20px 0' }}>
              <h2>{card[0].description}</h2>
              <p>${card[0].minPrice}</p>
              <p>Band colors</p>
              <ColorTabs />
            </div>
          </article>
        </section>
      ) : null}
      <Lines customLoading={loading} time={500} />
    </React.Fragment>
  );
});
