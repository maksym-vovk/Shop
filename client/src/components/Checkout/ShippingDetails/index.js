import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";

import {CheckoutTitle} from "../CheckoutTitle"
//styles
import './index.scss';


const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
const maxLength5 = maxLength(5);
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;
const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined;
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined;
export const phoneNumber = value => {
    return value.replace(/[^\d]/g, '');
};

const isLetter = value =>
    value && !/[a-zA-Z]/.test(value)
        ? 'Invalid value, must be letters only'
        : undefined;


const submit = (values) => {
    console.log('submit inside form');
    console.log(values);
};

const renderFieldShipping = ({type, placeholder, input, meta: {touched, error}}) => (
    <div className="input-row">
        <input {...input} type={type} placeholder={placeholder}/>
        {touched && error &&
        <span className="error">{error}</span>}
    </div>
);

export const ShippingDetails = reduxForm({
    form: "shippingDetails"
})(props => {
    const {handleSubmit} = props;
    return (
        <div className="shipping container">
            <CheckoutTitle/>
            <h1 className="shipping__title">Where should we send your order?</h1>
            <h2 className="shipping__title">Enter your name and address:</h2>

            <form className="shipping__form" onSubmit={handleSubmit(submit)}>
                <Field
                    name="firstName"
                    component={renderFieldShipping}
                    type="text"
                    placeholder="First Name"
                    validate={[required, isLetter, maxLength15, minLength2]}
                    warn={alphaNumeric}
                />
                <Field
                    name="lastName"
                    component={renderFieldShipping}
                    type="text"
                    placeholder="Last Name"
                    validate={[required, isLetter, maxLength15, minLength2]}
                    warn={alphaNumeric}
                />
                <Field
                    name="address"
                    component={renderFieldShipping}
                    type="text"
                    placeholder="Street Address"
                    validate={[required, minLength2]}
                />
                <Field
                    name="zipCode"
                    component={renderFieldShipping}
                    type="text"
                    placeholder="Zip Code"
                    validate={[required, maxLength5, minLength2]}
                />
                <Field
                    name="city"
                    component={renderFieldShipping}
                    type="text"
                    placeholder="City"
                    validate={[required, isLetter, minLength2]}
                />
                <Field
                    name="region"
                    component={renderFieldShipping}
                    type="text"
                    placeholder="Region"
                    validate={[required, isLetter, minLength2]}
                />
                <Field
                    name="country"
                    component={renderFieldShipping}
                    type="text"
                    placeholder="Country"
                    validate={[required, isLetter, minLength2]}
                />
            </form>

            <h2 className="shipping__title">What's your contact information?</h2>
            <form className="shipping__form" onSubmit={handleSubmit(submit)}>
                <div className="shipping__form-wrapper">
                    <Field
                        name="email"
                        component={renderFieldShipping}
                        type="email"
                        placeholder="Email"
                        validate={email}
                        warn={aol}
                    />
                    <p className="shipping__notice">We’ll email you a receipt and send order updates to your mobile
                        phone via SMS or iMessage.</p>
                </div>
                <div className="shipping__form-wrapper">
                    <Field
                        name="phone"
                        component={renderFieldShipping}
                        type="tel"
                        placeholder="Phone Number"
                        validate={[required, minLength(7)]}
                        normalize={phoneNumber}
                    />
                    <p className="shipping__notice"> The phone number you enter can’t be changed after you place your
                        order, so please make sure it’s correct.</p>
                </div>
                <Link to="/checkout/checkout-purchased">
                    <button className="shipping__button" type="submit">Buy</button>
                </Link>
            </form>
        </div>
    );
});