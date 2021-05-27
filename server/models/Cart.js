const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
    userId: String,
    date: {
        type: Date,
        default: Date.now()
    },
    productsArray: [{
        productId: {
            type: String,
        },
        quantity: {
            type: String
        }
    }]
});

//Export the model
module.exports = mongoose.model('Cart', cartSchema);