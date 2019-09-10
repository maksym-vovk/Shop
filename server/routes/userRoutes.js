const Router = require('express');
const router = Router();
const User = require('../models/User');

router.post('/customers', async (req, res) => {
  try{
    const user = await new User(req.body).save();
    res.send(user);
  }catch(e){
  	res.send(e);
  }
});

router.post('/customers/auth', async (req, res) => {
  const answer = await User.find(req.body);
  res.json(answer);
})

module.exports = router;