var Notes = require('../models/Notes');


// CREATE
exports.create = async (req, res) => {
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
    })
}


// READ
exports.read = async (req, res) => {
    try {
        let allData = await Notes.find();
        console.log(allData);
        res.json(allData);
    } catch (error) {
        console.log(error);
    }
}

// UPDATE
exports.update = async (req, res) => {
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
}

// DELETE
exports.delete = async (req, res) => {
    try {
        let id = req.params.id;
        let DeletingData = await Notes.findByIdAndDelete(id);
        console.log(DeletingData);
        res.json(DeletingData);
    } catch (error) {
        console.log(error);
    }
}

// SEARCH
exports.search = async (req, res) => {
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
}