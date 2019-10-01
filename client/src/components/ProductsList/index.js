import React, { useState, useEffect } from 'react';
import { Lines } from 'react-preloaders';
import { connect } from 'react-redux';
import { fetchCards } from '../../store/actions';
import { ProductCard } from '../';

import './index.scss';
import {login} from '../ReduxForm/RegistrationForm';

const mapStateToProps = state => {
  return {
    cards: state.products.cards
  };
};

export const ProductsList = connect(
  mapStateToProps,
  { fetchCards }
)(props => {
  const { params } = props;

  // const res = {
  //   params
  // };

  const { cards, fetchCards } = props;
  const [loading, setLoading] = useState(true);
  /* eslint-disable */
  useEffect(() => {
    document.title = 'Apple Watch Series 5';
    console.log(params);
    fetchCards(params);
    setLoading(false);
  }, [fetchCards, params]);

  const CardsList = () => {
    return cards.length ? (
      cards.map(item => {
        return <ProductCard state={item} key={item._id} />;
      })
    ) : (
      <h2>Nothing found</h2>
    );
  };

  return (
    <React.Fragment>
      <section className="product-list-wrapper">
        <CardsList />
      </section>
      <Lines customLoading={loading} time={300} />
    </React.Fragment>
  );
});
