import React from 'react'
import './style.scss'
import { SearchInputButton } from './SearchInputButton';

export const SearchInput = () => {
  return (
    <div className='search'>
      <SearchInputButton/>
      <input className='search__input' type="text" placeholder="Search"/>
    </div>
  )
}