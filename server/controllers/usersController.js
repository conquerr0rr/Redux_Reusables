var User = require('../models/User');
const bcrypt = require('bcryptjs');

let { EncryptPassword } = require('../utils/utility');
const { generateToken, verifyToken } = require('../utils/auth');


exports.login = async (req, res) => {
    try {
      let userAlreadyExist = await User.findOne({ email: req.body.email });
      if (userAlreadyExist) {
        let passwordCheck = await bcrypt.compare(req.body.password, userAlreadyExist.password)
        if (passwordCheck === true) {
          let token = generateToken(userAlreadyExist._id);
          res.status(200).json({
            'success': true,
            'token': token
          });
        }
        else {
          res.status(401).json({
            'success': false,
            'message': "Wrong Password"
          });
        }
      }
      else {
        res.status(401).json({
          'success': false,
          'message': "User does not exists."
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


exports.register = async (req, res) => {
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
      else {
        res.status(400).json({
          'success': 'false',
          'message': "Another user with the same email already registed. Try another email."
        });
      }
    } catch (error) {
  
      res.json(error);
    }
  };

exports.verify = async (req,res) =>{
    try {       
        let recievedToken = verifyToken(req.body.token);
        res.json(recievedToken);
    } catch (error) {
        console.log(error);
    }
}


exports.logout = async (req,res) =>{
  try {
    
  } catch (error) {
      console.log(error);
  }
}
