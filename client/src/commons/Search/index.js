import React from 'react';
import './index.scss';
import { connect } from 'react-redux'
import { setSearchStatus } from '../../store';

const mapStateToProps = (state) => ({
  status: state.search.searchStatus
})

export const Search = connect(mapStateToProps, {setSearchStatus})((props) => {
  return (
    <div className="search">
      { props.status
        ? null
        : <svg onClick={() => props.setSearchStatus(true)}
          className="search__image extras__image"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 451 451"
          version="1.1"
          viewBox="0 0 451 451"
          xmlSpace="preserve"
        >
          <path
            d="M447.05 428l-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1C384.65 86.2 298.35 0 192.35 0 86.25 0 .05 86.3.05 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2L428.05 447c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zM26.95 192.3c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z"/>
        </svg>
      }
    </div>
  );
});

// {/*<svg onClick={() => props.setSearchStatus(false)}*/}
// {/*     className='extras__image'*/}
// {/*     xmlns="http://www.w3.org/2000/svg"*/}
// {/*     version="1.1"*/}
// {/*     viewBox="0 0 16 16">*/}
// {/*  <g*/}
// {/*      strokeDasharray="none"*/}
// {/*      strokeLinecap="butt"*/}
// {/*      strokeLinejoin="miter"*/}
// {/*      strokeMiterlimit="4"*/}
// {/*      strokeOpacity="1"*/}
// {/*      strokeWidth="2"*/}
// {/*  >*/}
// {/*    <path*/}
// {/*        d="M2 1050.362l12-12M2 1038.362l12 12"*/}
// {/*        transform="translate(0 -1036.362)"*/}
// {/*    />*/}
// {/*  </g>*/}
// {/*</svg>*/}