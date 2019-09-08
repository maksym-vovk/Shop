const Router = require('express');
const router = Router();
const User = require('../models/User');

router.post('/customers', async (req, res) => {
  const user = await new User(req.body).save();
  res.send(user);
});

module.exports = router;