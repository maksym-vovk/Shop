const { Schema, model } = require('mongoose');

const schema = new Schema({
  category: String,
  model: String,
  connectivity: String,
  price: Number,
  description: String,
  color: String,
  images: {
    mainImage: String,
    tabsImages: [String]
  },
  technicalInfo: [
    {
      title: String,
      text: String
    }
  ],
  warehouseCount: Number
});

module.exports = model('Product', schema);
