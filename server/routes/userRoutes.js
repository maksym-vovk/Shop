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
  let key;
  req.body.customer ? key = 'customer' : key = 'password';
  const data = req.body[key];

  try {
    const dataUpdated = await User.findOneAndUpdate({_id: req.params.id}, {[key]: data}, {new: true});
    res.send({ updatedData: dataUpdated[key], updated: true });
  } catch (e) {
    res.send({updated: false});
  }

});

router.post('/customers', async (req, res) => {
  try{
    const password = req.body.password;
    const user = req.body.customer;
    await new User({customer: user, password: password}).save();
    res.send({res: true});
  }catch(e){
  	res.send({res: false});
  }
});

router.post('/customers/auth', async (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  const answer = await User.find({password, 'customer.login': login });
  if (answer[0]) {
    res.send(answer[0]);
  } else {
  	res.send({err: true})
  }
});

module.exports = router;