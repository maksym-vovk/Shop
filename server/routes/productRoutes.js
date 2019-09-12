const Router = require('express');
const router = Router();
const Product = require('../models/Product');
module.exports = router;

router.get('/cards', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
router.get('/phones', async (req, res) => {
  const products = await Product.find({
    category: 'phone'
  });
  res.json(products);
});

router.post('/cards', async (req, res) => {
  const card = await new Product(req.body).save();
  res.send(card);
});
