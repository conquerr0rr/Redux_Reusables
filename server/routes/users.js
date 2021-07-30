var express = require('express');
var router = express.Router();
var userController = require('../controllers/usersController');
var cartController = require('../controllers/cartController');
/* GET users listing. */


router.post('/register', userController.register);

router.post('/login', userController.login);

router.get('/logout',userController.logout);


router.get('/verify', userController.verify)


router.get('/getAllCartItems/:id' , cartController.getAllProducts);
router.patch('/addProductToCart' , cartController.addProductToCart);
// router.patch('' , cartController.updateProduct);
// router.delete('' , cartController.deleteProduct);

module.exports = router;
