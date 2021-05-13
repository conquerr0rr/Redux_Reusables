var ItemController = require('../controllers/ItemController.js');
var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' })

var Item = require('../models/Item.js');



// TEST ROUTE 
router.post('/addImage', upload.array("files"),(req,res)=>{
    console.log(req.body);
    console.log(req.files);
    res.json({message:"upload successful"})
})

// GET ALL ITEMS
router.get('/getAllItems', ItemController.getAllItems);

// GET ITEMS BY CATEGORY
router.get('/getItemByCategory' , ItemController.getItemByCategory);

// GET SINGLE ITEM
router.get('/getSingleItem', ItemController.getSingleItem);

// LIMIT RESULTS

// SORT RESULT

// ADD ITEM
router.post('/', ItemController.AddItem);

// DELETE PRODUCT
router.delete('/', ItemController.DeleteItem);

// UPDATE PRODUCT
router.patch('/', ItemController.UpdateItem);

module.exports = router;