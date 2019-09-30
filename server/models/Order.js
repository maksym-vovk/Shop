const { Schema, model } = require('mongoose');

const schema = new Schema ({
    item: {

    },
    user: {
        first_name: String,
        last_name: String,
        address: String,
        country: String,
        zip_code: String,
        city: String,
        phone: String,
    },
    authorized: Boolean
});