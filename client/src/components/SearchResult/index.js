import React, {useState, useEffect} from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { Lines } from 'react-preloaders';

const mapStateToProps = (state) => {
  return {
    inputValue: state.searchInputValue.value
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
        <div>
        </div>
      </section>
      <Lines customLoading={loading} time={500} />
    </React.Fragment>
  )
})