import React, { useEffect } from 'react';
import { Preloader } from '../Preloader';
import { connect } from 'react-redux';
import { fetchCards, setInputValue } from '../../store/actions';
import { ProductCard } from '../';

import './index.scss';
import {EmptyPage} from '../EmptyPage';

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
  /* eslint-disable */
  useEffect(() => {
    const searchPath = window.location.pathname.split('/');
    const searchResult = searchPath[searchPath.length - 1];
    props.setInputValue(decodeURI(searchResult));
    document.title = title || 'Apple Watch Series 5';
    fetchCards(params || searchResult);
  }, [fetchCards, params]);

  const сardsList = cards.map(item => {
    return <ProductCard state={item} key={item._id} />;
  });

    return (
        <React.Fragment>
            {
                cards.length
                    ? <section className="product-list-wrapper">
                        <CardsList />
                    </section>
                    :
                    <EmptyPage button={false} text="Sorry, nothing found on your search"/>
            }
            <Preloader />
        </React.Fragment>
  );
});
