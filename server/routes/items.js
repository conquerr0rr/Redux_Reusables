var ItemController = require('../controllers/ItemController.js');
var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file.originalname);
        let Filename = file.originalname;
      let Extension = Filename.split(".");
    //   console.log(Extension[1])
        cb(null, file.fieldname + '-' + Date.now() + '.' + Extension[1])
    }
})

var upload = multer({ storage: storage })



var Item = require('../models/Item.js');


// TEST ROUTE 
router.post('/addImage', upload.single('image'), async (req, res) => {
    try {
        console.log(req.file.filename);
        res.json({
            success: true,
            message: "upload successful"
        });
    } catch (error) {
        console.log(error);
    }
})

router.post('/addMultipleImage', upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'gallery', maxCount: 8 },
    { name: 'gta', maxCount: 8 }
]), async (req, res) => {
    try {
        console.log(req.files);
        res.json({
            success: true,
            message: "upload successful"
        });
    } catch (error) {
        console.log(error);
    }
})



// upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])


// GET ALL ITEMS
router.get('/getAllItems', ItemController.getAllItems);

// GET ITEMS BY CATEGORY
router.get('/getItemByCategory', ItemController.getItemByCategory);

// GET SINGLE ITEM
router.get('/getSingleItem', ItemController.getSingleItem);

// LIMIT RESULTS

// SORT RESULT

// ADD ITEM
router.post('/', upload.single('image'), ItemController.AddItem);

// DELETE PRODUCT
router.delete('/', ItemController.DeleteItem);

// UPDATE PRODUCT
router.patch('/', ItemController.UpdateItem);

module.exports = router;