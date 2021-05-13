const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema({
    userId :String,
    products: [{
        productId: String,
        quantity: String,
        price: String,
    }]
});

//Export the model
module.exports = mongoose.model('Cart', cartSchema);