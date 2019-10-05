const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');

const schema = new Schema ({
    cart: {},
    user: {
        _id: String,
        first_name: String,
        last_name: String,
        email: String,
        country: String,
        city: String,
        zip_code: String,
        address: String,
        phone: String
    },
    orderStatus: {type: Boolean, default: false},
    orderDate: {type: Date, default: Date.now}
}).index({'$**' : 'text'});

module.exports = model('Order', schema);