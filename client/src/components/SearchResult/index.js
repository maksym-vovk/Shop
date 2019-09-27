import React, {useState, useEffect} from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { ProductCard } from '../ProductCard';
import { Lines } from 'react-preloaders';

const mapStateToProps = (state) => {
  return {
    cards: state.products.cards,
    inputValue: state.search.searchInput
  }
}

export const SearchResult = connect(mapStateToProps)((props) => {
  const { cards } = props
  const searchArray = []

  cards.map((object, index) => {
    const getCard = (object) => {
      for (const key in object) {
        if (typeof (object[key]) === 'object') {
          getCard(object[key]);
        } else {
          if (object[key].toString().toLowerCase() === props.inputValue.toLowerCase()) {
            searchArray.push(cards[index])
          }
        }
      }
    }
    getCard(object)
  })

  const filtered = []
  const filteredObj = searchArray.filter(object => filtered.includes(object._id) ? false : filtered.push(object._id))

  const SearchResult = () => {
    return (
      filteredObj.length && props.inputValue
        ? filteredObj.map(obj => {
          return (
            <div>
              <ProductCard state={obj} key={obj._id}/>
            </div>
          )
        })
        : <p>No results</p>
    )
  }

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <section className='search-result container'>
        <div className='search-result__items'>
          {props.inputValue !== ''
            ? <p className='search-result-text'>Your search: <span
              className='search-result-text__input'>{props.inputValue}</span> (products: {filteredObj.length})</p>
            : null
          }
          <SearchResult/>
        </div>
      </section>
      <Lines customLoading={loading} time={500} />
    </React.Fragment>
  )
})