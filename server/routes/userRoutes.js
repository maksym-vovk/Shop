const Router = require('express');
const router = Router();
const User = require('../models/User');

router.post('/find_user',  async (req, res) => {
  const userByLogin = await User.find({login: req.body.login});
  const userByEmail = await User.find({email: req.body.email});
  const answer = {
  	login: userByLogin[0] ? true : false,
  	email: userByEmail[0] ? true : false
  }
  res.send(answer)
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