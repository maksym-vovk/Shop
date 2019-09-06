import React from 'react'
import {Link} from "react-router-dom";

import './style.scss'

export const ProductCard = (props) => {
    return (
        <Link className='product-card'>
            <div className='product-card-image'>
                <img src="/static/img/watches/series-4/1.jpg" alt="apple-watch"/>
            </div>
            <p className='product-card__title'>Series 4</p>
            <p className='product-card__subtitle'>GPS + CELLULAR</p>
            <span className='product-card__description'>Stainless Steel Case with Bleu Indigo Swift Leather Double Tour</span>
            <h3 className='product-card__price'>1399</h3>
        </Link>
    )
}