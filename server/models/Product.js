const { Schema, model } = require('mongoose');

const schema = new Schema({
  category: String,
  minPrice: String,
  filter: {
    model: String,
    caseMaterial: String,
    caseFinish: String,
    bandType: String
  },
  colors: {},
  description: String,
  connectivity: {
    GPS: {
      size_40_price: String,
      size_44_price: String
    },
    CELLULAR: {
      size_40_price: String,
      size_44_price: String
    }
  },
  techSpecs: {},
  warehouseCount: Number,
  status: Boolean
});

module.exports = model('Product', schema.index({'$**' : 'text'}));
