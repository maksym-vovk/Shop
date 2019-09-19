import React, {useState} from "react";
import {CheckoutItemDetails} from "../CheckoutItemDetails";
// import {connect} from 'react-redux'

//styles
import './index.scss';


// const mapStateToProps = state => {
//     return {
//         checkoutItems: state.addToBag.items
//     }
// };

export const CheckoutItem = ({data})=> {

    const [productDetails, setProductDetails] = useState(false);

    const changeProductDetailsStatus = () => {
        setProductDetails(!productDetails)
    };

    return (
        <div className="product-block">
            {
                productDetails ?
                    <CheckoutItemDetails removeProductDetails={changeProductDetailsStatus} data={data}/>
                    : null
            }
            <div className="product">
                <div className="product__item">
                    <img className="product__image" src={data.image} alt="watch"/>
                </div>
                <div className="product__description">
                    <p className="product__name">{data.name}</p>
                    <span className="product__quantity">Quantity: {data.quantity}</span>
                    <button onClick={() => {setProductDetails(true)}} className="product__details-link">View details</button>
                </div>
            </div>
        </div>
    )
};