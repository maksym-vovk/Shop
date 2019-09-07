const { Schema, model } = require('mongoose');

const schema = new Schema({
  login: String,
  first_name: String,
  last_name: String,
  password: String,
  gender: String,
  email: String,
  age: Number,
  address: String,
  phone: String,
  created_at: Date,
  cart_history: [{}],
  payment_history: [{}]
});

module.exports = model('User', schema);
