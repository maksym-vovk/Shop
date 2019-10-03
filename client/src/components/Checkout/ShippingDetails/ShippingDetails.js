import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { sendOrder, clearOrder } from "../../../store";

import { AuthShippingDetails } from './AuthorizedForm';
import { UnAuthShippingDetails } from './UnAuthorizedForm';
import { FailureOrder } from "../FailureOrder";


const mapStateToProps = state => ({
    cart: state.cart,
    order: state.order
});

export const ShippingDetails = withRouter(connect(mapStateToProps, {sendOrder, clearOrder})(props => {
    const {authorized, cart, sendOrder, clearOrder, order} = props;
    const [errorMessage, setErrorMessage] = useState(false);

    useEffect(() => {
        setErrorMessage(order.error)
    }, [order.error]);

    useEffect(() => {
        if(order.success)
        {
            clearOrder();
            props.history.push("/checkout/purchased")
        }
    }, [order.success]);

    const submitForm = (user) => {
        sendOrder({user, cart});
    };

    return (
        <React.Fragment>
            {
                authorized
                    ? <AuthShippingDetails onSubmit={submitForm}/>
                    : <UnAuthShippingDetails onSubmit={submitForm}/>
            }

            {
                errorMessage ? <FailureOrder removeErrorMessage = {setErrorMessage} /> : null
            }
        </React.Fragment>
    )
}));