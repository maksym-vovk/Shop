const Router = require('express');
const router = Router();
const Product = require('../models/Product');
module.exports = router;

router.get('/cards/:query', async (req, res) => {
  
  console.log(req.params.query);
  const  query = {$text: {$search: req.params.query}};
  const products = await Product.find(query);
  res.json(products);
});

router.get('/cards/:id', async (req, res) => {
  const product = await Product.find({
    _id: req.params.id
  });
  res.json(product);
});

router.post('/cards', async (req, res) => {
  try {
    const card = await new Product(req.body).save();
    res.send(card);
  } catch (error) {
    res.send(error);
  }
});
