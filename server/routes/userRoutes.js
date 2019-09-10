const Router = require('express');
const router = Router();
const User = require('../models/User');

router.post('/find_user',  async (req, res) => {
  console.log(req.body);
  const user = await User.find(req.body);
  console.log(user);
  res.send(user)
})

router.post('/customers', async (req, res) => {
  try{
    const user = await new User(req.body).save();
    res.send(user);
  }catch(e){
  	res.send(e);
  }
});

module.exports = router;