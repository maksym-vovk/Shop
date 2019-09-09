const { Schema, model } = require('mongoose');

const schema = new Schema({
  filter: {},
  images: {
    mainImage: String,
    tabsImages: [String]
  },
  description:String,
  technicalInfo: [
    {
      text: String
    }
  ],
  warehouseCount: Number
});

module.exports = model('Product', schema);
