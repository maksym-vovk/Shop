import React, {useState, useEffect} from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { Lines } from 'react-preloaders';
import { ProductsList } from '../';

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
      <section className='search-result container'>
        {/*<ProductsList params={{$text: {$search: props.inputValue}}}/>*/}
        <ProductsList params={props.inputValue}/>
      </section>
      <Lines customLoading={loading} time={500} />
    </React.Fragment>
  )
})