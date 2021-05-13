const Cart = require('../models/Cart');



exports.getAllProducts = async(req,res) =>{
    let products = await Cart.find();
    res.json(products);
    console.log(products);
}
exports.deleteProduct = async(req,res) =>{

}
exports.newProduct = async(req,res) =>{
     await new Cart({
         userId : req.body.userId,
         productId :req.body.productId,
         quantity : req.body.quantity,
         price : req.body.price
     }).save((err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.json('new cart item created');
        }
     })
}
exports.updateProduct = async(req,res) =>{

}