var express = require('express');
var router = express.Router();
var User = require('../models/User');
const bcrypt = require('bcryptjs');

let { EncryptPassword } = require('../utils/utility');
const generateToken = require('../utils/auth');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.post('/register', async (req, res) => {
  try {
    let existedEmail = await User.findOne({ email: req.body.email })
    if (!existedEmail) {
      let hashedPassword = await EncryptPassword(req.body.password);
      let IsRegistered = await new User({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hashedPassword
      }).save();
      console.log(IsRegistered);
      res.status(200).json({
        'success': 'true',
        'message': "user registered successfully"
      });
    }
    else{
      res.status(400).json({
        'success': 'false',
        'message': "Another user with the same email already registed. Try another email."
      });
    }
  } catch (error) {

    res.json(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    let userAlreadyExist = await User.findOne({ email: req.body.email });
    if (userAlreadyExist) {
      let passwordCheck = await bcrypt.compare(req.body.password, userAlreadyExist.password)
      if (passwordCheck === true) {
        let token = generateToken(userAlreadyExist._id);
        res.json({ token: token });
      }
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
