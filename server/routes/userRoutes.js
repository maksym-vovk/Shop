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
	console.log("here")
  try{
    const user = await new User(req.body).save();
    res.send(user);
  }catch(e){
  	res.send(e);
  }
});

router.post('/customers/auth', async (req, res) => {
  const answer = await User.find(req.body);
  if (answer[0]) {
    res.send(answer[0]);
  } else {
  	res.send({err: true})
  }
})

module.exports = router;