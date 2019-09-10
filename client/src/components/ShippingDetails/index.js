import React from "react";
import { Field, reduxForm, SubmissionError } from 'redux-form';

//styles
import './index.scss';

const submit = (values) => {
    console.log('submit inside form');
    console.log(values);
};

const renderFieldShipping = ({ type, placeholder, input, meta: { touched, error } }) => (
    <div className="input-row">
        <input {...input} type={type} placeholder={placeholder}/>
        {touched && error &&
        <span className="error">{error}</span>}
    </div>
);

export const ShippingDetails = reduxForm ({
    form: "shippingDetails"
}) (props => {
    const { handleSubmit } = props;
    return (
        <div className="shipping container">
            <h1 className="shipping__title">Where should we send your order?</h1>
            <h2 className="shipping__title">Enter your name and address:</h2>

            <form className="shipping__form" onSubmit={handleSubmit(submit)}>
                <Field name="firstName" component={renderFieldShipping} type="text" placeholder="First Name"/>
                <Field  name="lastName" component={renderFieldShipping} type="text" placeholder="Last Name"/>
                <Field  name="address" component={renderFieldShipping} type="text" placeholder="Street Address"/>
                <Field  name="zipCode" component={renderFieldShipping} type="text" placeholder="Zip Code"/>
                <Field  name="city" component={renderFieldShipping} type="text" placeholder="City"/>
                <Field  name="region"  component={renderFieldShipping} type="text" placeholder="Region"/>
                <Field  name="country" component={renderFieldShipping} type="text" placeholder="Country"/>
                <Field  name="checkbox" component={renderFieldShipping} type="checkbox" label="Is it your business address?"/>
            </form>

                <h2 className="shipping__title">What's your contact information?</h2>
            <form className="shipping__form" onSubmit={handleSubmit(submit)}>
                <Field name="email" component={renderFieldShipping} type="email" placeholder="Email"/>
                <Field name="phone" component={renderFieldShipping} type="tel" placeholder="Phone Number"/>
                <button className="shipping__button" type="submit">Continue to Payment</button>
            </form>
        </div>
    );
});