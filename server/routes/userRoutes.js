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

module.exports = router;