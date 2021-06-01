const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    CartDetails: {
        date: {
            type: Date,
            default: Date.now()
        },
        productsArray: [{
            productId: {
                type: String,
                default: 'null'
            },
            quantity: {
                type: Number,
                default: -1
            }
        }]
    }
});

//Export the model
module.exports = mongoose.model('User', userSchema);