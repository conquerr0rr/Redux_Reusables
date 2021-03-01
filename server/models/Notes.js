var mongoose = require('mongoose');
var Notes = mongoose.Schema({
    firstname: {
        required: true,
        type: String,
    },
    lastname: {
        required: true,
        type: String,
    },
    number: {
        required: true,
        type: Number,
    },
    data: {
        required: true,
        type: String,
    }
});

module.exports = mongoose.model('Notes', Notes);