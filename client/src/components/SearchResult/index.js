import React, {useState, useEffect} from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { ProductsList } from '../';
import { Preloader } from '../Preloader';

const mapStateToProps = (state) => {
  return {
    cards: state.products.cards,
    inputValue: state.search.searchInput
  }
}

export const SearchResult = connect(mapStateToProps)((props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      {loading ? <Preloader />
        : <section className='search-result container'>
          {props.cards.length
            ? <h2 className='search-result-text'>Your search: <span className='search-result-text__value'>{props.inputValue}</span> ({props.cards.length} results found)</h2>
            : null
          }
          <ProductsList params={props.inputValue}/>
        </section>
      }
    </React.Fragment>
  )
})