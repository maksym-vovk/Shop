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
  console.log(props);
  const { model } = props;
  const res =
    {
      params: {
        'filter.model': model
      }
    } || {};

  const { cards, fetchCards } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCards(res);
    setLoading(false);
  }, [fetchCards]);

  const CardsList = () => {
    return cards.length
      ? cards.map(item => {
          return <ProductCard state={item} key={item._id} />;
        })
      : null;
  };

  return (
    <React.Fragment>
      <section className="product-list-wrapper">
        <CardsList />
      </section>
      <Lines customLoading={loading} time={500} />
    </React.Fragment>
  );
});
