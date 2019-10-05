import React, { useState, useEffect } from 'react';
import { Lines } from 'react-preloaders';
import { connect } from 'react-redux';
import { fetchCards } from '../../store/actions';

import { ProductCard } from '../';

import './index.scss';

const mapStateToProps = state => {
  return {
    cards: state.products.cards
  };
};

export const ProductsList = connect(
  mapStateToProps,
  { fetchCards }
)(props => {
  const { params, title, cards, fetchCards } = props;
  const [loading, setLoading] = useState(true);
  /* eslint-disable */
  useEffect(() => {
    document.title = title || 'Apple Watch Series 5';
    fetchCards(params);
    setLoading(false);
  }, [fetchCards, params]);

  const CardsList = () => {
    return cards.map(item => {
        return <ProductCard state={item} key={item._id} />;
      });
  };

    return (
        <React.Fragment>
            {
                cards.length
                    ? <section className="product-list-wrapper">
                        <CardsList />
                    </section>
                    :
                    <div className="empty">
                        <img className="empty__logo" src="/static/img/Apple_Grey_Logo.png" alt="apple-logo"/>
                        <h1 className="empty__text">Sorry, nothing found on your search.</h1>
                    </div>
            }
            <Lines customLoading={loading} time={300} />
        </React.Fragment>
  );
});
