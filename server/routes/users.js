var express = require('express');
var router = express.Router();
var User = require('../models/User');

let { EncryptPassword } = require('../utils/utility');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', async (req, res) => {
  try {
    let existedEmail = await User.findOne({ email: req.body.email })
    if (existedEmail) {
      res.json("Another user with the same email already registed. Try another email.")
    }
    else {
      let hashedPassword = await EncryptPassword(req.body.password);
      let IsRegistered = await new User({
        email:req.body.email,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password: hashedPassword
      }).save();
      console.log(IsRegistered);
      res.json("user registered successfully");
    }

  } catch (error) {
    res.json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    let userAlreadyExist = await User.findOne({email:req.body.email});
    if(!userAlreadyExist){
      return res.json('No user with that name is registered.Please register to continue.')
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
