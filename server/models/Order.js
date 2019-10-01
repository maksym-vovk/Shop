const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');

const schema = new Schema ({
    item: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        name: String,
        details: String,
        image: String,
        quantity: Number,
        color: String,
        price: Number,
    }],
    user: {
        first_name: String,
        last_name: String,
        address: String,
        country: String,
        city: String,
        zip_code: String,
        phone: String,
    },
    authorized: {Boolean, default: false}
});

module.exports = model('Order', schema);