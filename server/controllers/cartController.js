var User = require('../models/User');



exports.getAllProducts = async (req, res) => {
    try {
        let userId = req.params.id;
        let products = await User.findById({ _id: userId });
        res.status(200).json(products);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

exports.addProductToCart = async (req, res) => {
    try {
        // console.log(req.params);
        let userId = req.body.id;
        let existingUser = await User.findByIdAndUpdate(
            userId,
            // $push pushes a new item into the exisitin
            {
                $push: { "CartDetails.productsArray": req.body.productsArray }
            }
        );
        res.status(200).json({ message: "Product Added Successfully", success: true });
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}


// exports.deleteProduct = async (req, res) => {
//     try {

//     } catch (error) {
//         res.status(400).json(error);
//         console.log(error)
//     }
// }


// exports.newProduct = async (req, res) => {
//     try {
//         let CartItem = await new User({
//             userId: req.body.userId,
//             productsArray : req.body.productsArray,
//         });
//         CartItem.save((err) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 res.status(200).json('new cart item created');
//             }
//         })
//     } catch (error) {
//         res.status(400).json(error);
//         console.log(error)
//     }
// }



// exports.updateProduct = async (req, res) => {

// }