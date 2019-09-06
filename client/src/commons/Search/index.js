import React from 'react';
import {Link} from 'react-router-dom';

import './index.scss';

export const SearchIcon = () => {
  return (
    <div className='wrapIcon'>
      <div>
        <svg className='search-icon main-menu_icon'

          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 451 451"
          version="1.1"
          viewBox="0 0 451 451"
          xmlSpace="preserve"
        >
          <path d="M447.05 428l-109.6-109.6c29.4-33.8 47.2-77.9 47.2-126.1C384.65 86.2 298.35 0 192.35 0 86.25 0 .05 86.3.05 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126.1-47.2L428.05 447c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.2-5.2 5.2-13.8 0-19zM26.95 192.3c0-91.2 74.2-165.3 165.3-165.3 91.2 0 165.3 74.2 165.3 165.3s-74.1 165.4-165.3 165.4c-91.1 0-165.3-74.2-165.3-165.4z" />
        </svg>
      </div>
      <div>
        <svg className='cart-icon main-menu_icon'
          height='100%'
          width='22px'
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 489 489"
          version="1.1"
          viewBox="0 0 489 489"
          xmlSpace="preserve"
        >
          <path d="M440.1 422.7l-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z" />
        </svg>
      </div>
      <Link to="/login">
        <svg className='login-icon main-menu_icon'
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          enableBackground="new 0 0 612 612"
          version="1.1"
          viewBox="0 0 612 612"
          xmlSpace="preserve"
        >
          <path d="M331.685 425.378c-7.478 7.479-7.478 19.584 0 27.043 7.479 7.478 19.584 7.478 27.043 0l131.943-131.962c3.979-3.979 5.681-9.276 5.412-14.479.269-5.221-1.434-10.499-5.412-14.477L358.728 159.56c-7.459-7.478-19.584-7.478-27.043 0-7.478 7.478-7.478 19.584 0 27.042l100.272 100.272H19.125C8.568 286.875 0 295.443 0 306s8.568 19.125 19.125 19.125h412.832L331.685 425.378zM535.5 38.25H153c-42.247 0-76.5 34.253-76.5 76.5v76.5h38.25v-76.5c0-21.114 17.117-38.25 38.25-38.25h382.5c21.133 0 38.25 17.136 38.25 38.25v382.5c0 21.114-17.117 38.25-38.25 38.25H153c-21.133 0-38.25-17.117-38.25-38.25v-76.5H76.5v76.5c0 42.247 34.253 76.5 76.5 76.5h382.5c42.247 0 76.5-34.253 76.5-76.5v-382.5c0-42.247-34.253-76.5-76.5-76.5z" />
        </svg>
      </Link>
    </div>
  )
};