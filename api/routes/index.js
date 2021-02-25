var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Notes = require('../models/Notes');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});


//CREATE ROUTE
router.put('/create', async (req, res) => {
    await new Notes({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        number: req.body.number,
        data: req.body.data
    }).save((err) => {
        if (err) {
            console.log(err);
        } else {
            res.json('data sent successfully');
        }
    });
});

// SEARCH WITH EXACT KEYWORD
router.get('/searchExactKeyword', async (req, res) => {
    try {
        let searchText = req.body.searchText;
        let RecievedData = await Notes.findOne({ 'firstname': searchText });
        if (RecievedData == null) {
            res.json("keyword entered by user does not matches with the data.");
        } else {
            console.log(RecievedData);
            res.json(RecievedData);
        }
    } catch (error) {
        console.log(error);
    }
});


// GET ALL DATA
router.get('/getAllData', async (req, res) => {
    try {
        let allData = await Notes.find();
        console.log(allData);
        res.json(allData);
    } catch (error) {
        console.log(error);
    }
});

// UPDATE ROUTE
router.patch('/update/:id', async (req, res) => {
    try {
        let updateText = req.body.updateText;
        let RecievedData = await Notes.findOneAndUpdate({ 'firstname': updateText });
        if (RecievedData == null) {
            res.json("keyword entered by user does not matches with the data.");
        } else {
            console.log(RecievedData);
            res.json(RecievedData);
        }
    } catch (error) {
        console.log(error);
    }
});
// DELETE ROUTE
router.delete('/delete/:id', async (req, res) => {
    try {
        let DeletingData = await Notes.findOneAndDelete();
        console.log(DeletingData);
        res.json(DeletingData);
    } catch (error) {
        console.log(error);
    }
});
module.exports = router;