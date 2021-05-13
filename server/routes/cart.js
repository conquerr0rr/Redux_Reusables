var express = require('express');
var router = express.Router();

let cartController = require('../controllers/cartController');

router.get('' , cartController.getAllProducts);
router.patch('' , cartController.updateProduct);
router.post('' , cartController.newProduct);
router.delete('' , cartController.deleteProduct);


module.exports = router;