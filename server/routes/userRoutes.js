const Router = require('express');
const router = Router();
const User = require('../models/User');

router.post('/find_user',  async (req, res) => {
  const userByLogin = await User.find({login: req.body.login});
  const userByEmail = await User.find({email: req.body.email});
  const userById = await User.find({_id: req.body._id});
  let user_login_id = await userByLogin.map(item => item._id.toJSON());
  let user_email_id = await userByEmail.map(item => item._id.toJSON());

    user_login_id = user_login_id[0];
    user_email_id = user_email_id[0];
  console.log(req.body);

  // user_id = user_id !== req.body._id;
    let idStatus = Boolean;
    let idLoginStatus = Boolean;
    let idEmailStatus = Boolean;

    // if ((user_login_id && user_email_id) === req.body._id) {
    //     idStatus = false
    // }



  if(user_login_id === req.body._id) {
      console.log('eee')
      idLoginStatus = false
  } else {
      idLoginStatus = true;
  }

    if(user_email_id === req.body._id ) {
        idEmailStatus = false
    } else {
        idEmailStatus = true
    }

  const answer = {
        login_id : idLoginStatus,
      email_id: idEmailStatus,
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

router.post('/customers/auth', async (req, res) => {
  const answer = await User.find(req.body);
  if (answer[0]) {
    res.send({auth: true});
  } else {
  	res.send({auth: false})
  }
})

module.exports = router;