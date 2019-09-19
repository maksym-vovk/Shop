const Router = require('express');
const router = Router();
const User = require('../models/User');

router.post('/find_user',  async (req, res) => {
  let idEmailStatus, user_email_id;
  const userByLogin = await User.find({login: req.body.login});
  const userByEmail = await User.find({email: req.body.email});

  if (userByEmail[0]) {
    user_email_id = userByEmail[0]._id.toString();

    (user_email_id === req.body._id )
      ? idEmailStatus = false
      : idEmailStatus = true;
  }

  const answer = {
    email_id: idEmailStatus,
  	login: userByLogin[0] ? true : false,
  	email: userByEmail[0] ? true : false
  };
  res.send(answer)
});

router.put('/customers/:id', async (req, res) => {
  const user = req.body;

    await User.updateOne({_id: req.params.id}, user,
    (err) => {
    if (err) res.send({error_message: 'Failed try later'});
    res.send({updated: true, user: user});
    })
});

router.post('/customers', async (req, res) => {
  try{
    const user = await new User(req.body).save();
    res.send({res: true});
  }catch(e){
  	res.send({res: false});
  }
});

router.post('/customers/auth', async (req, res) => {
  const answer = await User.find(req.body);
  if (answer[0]) {
    res.send(answer[0]);
  } else {
  	res.send({err: true})
  }
});

module.exports = router;