import React, {useState} from 'react'
import './style.scss'
import { SearchInputButton } from './SearchInputButton';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    value: state.
}

export const SearchInput = (props) => {
  return (
    <div className='search'>
      <SearchInputButton/>
      <input className='search__input' type="text" placeholder="Search"/>
    </div>
  )
}