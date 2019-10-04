import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import SearchInputButton from './SearchInputButton';
import './style.scss';
import { setInputValue, setSearchStatus } from '../../store';
import useWindowDimensions from '../Header';

const mapStateToProps = state => ({
  value: state.search.searchInput
});

export const SearchInput = connect(
  mapStateToProps,
  { setInputValue, setSearchStatus }
)(props => {
  const {width} = useWindowDimensions();
  const [input, setInput] = useState('');

  const useOutsideClick = (ref) => {
    const clickOutside = (event) => {
      console.log(ref.current);
      if (ref.current && !ref.current.contains(event.target)) {
        props.setSearchStatus(false)
      }
    }
    useEffect(() => {
      document.addEventListener('mousedown', clickOutside)
      return () => {
        document.removeEventListener('mousedown', clickOutside)
      }
    })
  }

  const wrapperRef = useRef(null)
  useOutsideClick(wrapperRef)
    
  return (
    <form ref={wrapperRef} className={width <= 768 ? 'search search-mobile-width' : 'search'} onSubmit={e => e.preventDefault()}>
      <SearchInputButton onClick={() => props.setInputValue(input)}/>
      <input defaultValue={input} onInput={event => setInput(event.target.value)} className='search__input' type="text" placeholder="Search"/>
      <svg onClick={() => props.setSearchStatus(false)}
        className='extras__image'
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 16 16">
        <g
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="2"
        >
          <path
            d="M2 1050.362l12-12M2 1038.362l12 12"
            transform="translate(0 -1036.362)"
          />
        </g>
      </svg>
    </form>
  )
});
