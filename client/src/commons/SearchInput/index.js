import React, {useState} from 'react'
import './style.scss'
import { SearchInputButton } from './SearchInputButton';
import { connect } from 'react-redux'
import { setInputValue } from '../../store';
import useWindowDimensions from '../Header';

const mapStateToProps = (state) => ({
  value: state.search.searchInput
})

export const SearchInput = connect(mapStateToProps, {setInputValue})((props) => {
  const {width} = useWindowDimensions();
  const [input, setInput] = useState('')
  return (
    <div className={width < 768 ? 'search search-mobile-width' : 'search'}>
      <SearchInputButton onClick={() => props.setInputValue(input)}/>
      <input defaultValue={input} onInput={event => setInput(event.target.value)} className={width < 768 ? 'search__input additional-border-search' : 'search__input'} type="text" placeholder="Search"/>
    </div>
  )
});