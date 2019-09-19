const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
  login: {type: String, unique: true},
  first_name: String,
  last_name: String,
  password: String,
  gender: String,
  email: {type: String, unique: true},
  age: Number,
  address: String,
  country: String,
  zip_code: String,
  city: String,
  phone: String,
  cart_history: [{}],
  payment_history: [{}]
}, {timestamps: true});

schema.plugin(uniqueValidator, {message: 'is already taken'});

module.exports = model('User', schema);
