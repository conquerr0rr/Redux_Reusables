var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController');
/* GET users listing. */


router.post('/register', userController.register);

router.post('/login', userController.login);


router.get('/verify', userController.verify)

module.exports = router;
