const Router = require('express');
const router = Router();
const Product = require('../models/Product');
module.exports = router;

router.get('/cards', async (req, res) => {
  console.log('req.query',req.query)
  const products = await Product.find(req.query);
  res.json(products);
});
router.get('/cards/:id', async (req, res) => {
  // console.log(req.params)
  const product = await Product.find({
    _id: req.params.id
  });
  res.json(product);
});
router.get('/phones', async (req, res) => {
  const products = await Product.find({
    category: 'phone'
  });
  res.json(products);
});

router.get('/watch', async (req, res) => {
  const products = await Product.find({
    'filter.category': 'watch',
    'filter.size': '40mm'
  });
  res.json(products);
});

router.post('/cards', async (req, res) => {
  try {
    const card = await new Product(req.body).save();
    res.send(card);
  } catch (error) {
    res.send(error);
  }
});
