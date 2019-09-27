import React, {useState} from 'react'
import './style.scss'
import { SearchInputButton } from './SearchInputButton';
import { connect } from 'react-redux'
import { setInputValue } from '../../store';

const mapStateToProps = (state) => ({
  value: state.search.searchInput
})

export const SearchInput = connect(mapStateToProps, {setInputValue})((props) => {
  const [input, setInput] = useState('')
  return (
    <div className='search'>
      <SearchInputButton onClick={() => props.setInputValue(input)}/>
      <input defaultValue={input} onInput={event => setInput(event.target.value)} className='search__input' type="text" placeholder="Search"/>
    </div>
  )
})