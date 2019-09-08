const { Schema, model } = require('mongoose');

const schema = new Schema({
  category: String,
  model: String,
  price: Number,
  description: String,
  color: [String],
  image: [String],
  technicalInfo: [
    {
      title: String,
      text: String
    }
  ],
  warehouseCount: Number
});

module.exports = model('Product', schema);
