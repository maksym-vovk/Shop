import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {ShippingDetails} from "./ShippingDetails";
import {CheckoutTitle} from "../CheckoutTitle"
import submitShippingDetails from "./submitShippingDetails";

const mapStateToProps = state => ({
   shippingDetails: state.shippingDetailsStatus.status
});

export const ShippingDetailsForm = connect(mapStateToProps)(props => {
    return (
        <div>
            <CheckoutTitle/>
            {props.shippingDetails ? <Redirect to='/checkout/purchased'/> : null }
            <ShippingDetails onSubmit={submitShippingDetails}/>
        </div>
    )
});
