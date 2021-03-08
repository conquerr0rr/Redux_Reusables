// IMPORTING CONTROLLER
var indexController = require('../controllers/indexController.js');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


//CREATE ROUTE
router.put('/create', indexController.create);

// SEARCH WITH EXACT KEYWORD
router.get('/searchExactKeyword', indexController.search);


// GET ALL DATA
router.get('/getAllData', indexController.read);

// UPDATE ROUTE
router.patch('/update/:id', indexController.update);
// DELETE ROUTE
router.delete('/delete/:id', indexController.delete);

module.exports = router;