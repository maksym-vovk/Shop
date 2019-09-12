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
  if (answer[0]) {
    res.send({auth: true});
  } else {
  	res.send({auth: false})
  }
})

module.exports = router;