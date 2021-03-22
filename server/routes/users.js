var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcryptjs');

let { EncryptPassword } = require('../utils/utility');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', async (req, res) => {
  try {
    let existedUsername = await User.findOne({ username: req.body.username })
    if (existedUsername) {
      res.json("Another user with the same username already registed. Try another name.")
    }
    else {
      let hashedPassword = await EncryptPassword(req.body.password);
      let IsRegistered = await new User({
        username: req.body.username,
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
    let userAlreadyExist = await User.findOne({username:req.body.username});
    if(userAlreadyExist){
      return res.json("Another user with the same username already registed. Try another name.")
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
