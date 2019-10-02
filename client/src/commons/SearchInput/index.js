import React, { useState } from 'react';
import { connect } from 'react-redux';
import SearchInputButton from './SearchInputButton';
import './style.scss';
import { setInputValue } from '../../store';

const mapStateToProps = state => ({
  value: state.search.searchInput
});

export const SearchInput = connect(
  mapStateToProps,
  { setInputValue }
)(props => {
  const [input, setInput] = useState('');
  return (
    <form className='search' onSubmit={e => e.preventDefault()}>
      <SearchInputButton onClick={() => props.setInputValue(input)}/>
      <input defaultValue={input} onInput={event => setInput(event.target.value)} className='search__input' type="text" placeholder="Search"/>
    </form>
  )
})
