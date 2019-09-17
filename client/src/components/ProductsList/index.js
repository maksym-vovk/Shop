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
  // const res = {
  //   params: {
  //     // 'filter.category': 'watch',
  //     // 'filter.size': '40mm',
  //     // 'filter.bandType': 'Sport',
  //     // 'filter.bandColor': 'white',
  //     // 'filter.caseMaterial': 'Aluminium',
  //   }
  // };
  mapStateToProps,
  { fetchCards }
)(props => {
  const { cards, fetchCards } = props;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCards();
    setLoading(false);
  }, [fetchCards]);

  // console.log(props);
  // console.log('cards', cards);

  const CardsList = () => {
    return cards.length
      ? cards.map(item => {
          return <ProductCard state={item} key={item._id}/>;
        })
      : null;
  };

  return (
    <React.Fragment>
      <section className="product-list-wrapper container">
        <CardsList />
      </section>
      <Lines customLoading={loading} time={500} />;
    </React.Fragment>
  );
});
