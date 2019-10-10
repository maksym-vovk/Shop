import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCards, setInputValue } from '../../store/actions';
import { ProductCard } from '../';

import './index.scss';
import { EmptyPage } from '../EmptyPage';
import { Preloader } from '../Preloader';

const mapStateToProps = state => {
  return {
    cards: state.products.cards
  };
};

export const ProductsList = connect(
  mapStateToProps,
  { fetchCards, setInputValue }
)(props => {
  const { params, title, cards, fetchCards } = props;
  const [loading, setLoading] = useState(true);
  /* eslint-disable */
  useEffect(() => {
    const searchPath = window.location.pathname.split('/');
    const searchResult = searchPath[searchPath.length - 1];
    props.setInputValue(decodeURI(searchResult));
    document.title = title || 'Apple Watch Series 5';
    fetchCards(params || searchResult);
    setTimeout(() => setLoading(false), 1000);
  }, [fetchCards, params]);

  const сardsList = cards.map(item => {
    return <ProductCard state={item} key={item._id} />;
  });

  const preloader = loading ? <Preloader /> : null;
  const content = !loading ? (
    <section className="product-list-wrapper">{сardsList}</section>
  ) : null;
  const emptyPage = !loading && !cards.length ? <EmptyPage button={false} text='Nothing found'/> : null;

  return (
    <React.Fragment>
      {preloader}
      {content}
      {emptyPage}
    </React.Fragment>
  );
});
