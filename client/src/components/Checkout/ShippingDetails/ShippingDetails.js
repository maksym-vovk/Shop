import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { sendOrder } from "../../../store";

import { AuthShippingDetails } from './AuthorizedForm';
import { UnAuthShippingDetails } from './UnAuthorizedForm';


const mapStateToProps = state => ({
    cart: state.cart
});

export const ShippingDetails = connect(mapStateToProps, {sendOrder})(props => {
    const {authorized, cart, sendOrder} = props;
    const [status, setStatus] = useState(false);

    const submitForm = (user) => {
        sendOrder({user, cart});
        setStatus(true);
    };

    return (
        <React.Fragment>
            {
                authorized
                    ? <AuthShippingDetails onSubmit={submitForm}/>
                    : <UnAuthShippingDetails onSubmit={submitForm}/>
            }

            {
                status ? <Redirect to="/checkout/purchased" /> : null
            }
        </React.Fragment>
    )
});