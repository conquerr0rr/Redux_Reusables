var Item = require('../models/Item');

exports.AddItem = async (req, res) => {
    await new Item({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
    }).save((err) => {
        if (err) {
            res.status(400).json({
                success: false,
                message: "Could not get the Items."
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "Item Successfully created."
            })
        }
    })
}

exports.getSingleItem = async (req, res) => {
    let singleItem = await Item.findById({ _id: req.body.id });
    if (singleItem) {
        res.status(200).json(singleItem);
    }
    else {
        res.status(400).json({
            success: false,
            message: "Item cannot be found."
        })
    }
}

exports.getAllItems = async (req, res) => {
    let AllItems = await Item.find();
    res.status(200).json(AllItems);
}

exports.getItemByCategory = async (req, res) => {
    let ItemByCategory = await Item.find({ category: req.body.category });
    if (ItemByCategory) {
        res.status(200).json(ItemByCategory);
    }
    else {
        res.status(400).json({
            success: false,
            message: "Item cannot be found with this category name."
        })
    }
}

exports.DeleteItem = async (req, res) => {
    let DeletingItem = await Item.findByIdAndDelete({ _id: req.body.id });
    if (DeletingItem) {
        res.status(200).json({
            success: true,
            message: "Deleted Successfully"
        })
    }
    else {
        res.status(400).json({
            success: false,
            message: "Item cannot be deleted."
        })
    }
}

exports.UpdateItem = async (req, res) => {
    let UpdatingItem = await Item.findByIdAndUpdate({
        _id:req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
    });
    if(UpdatingItem){
        res.status(200).json({
            success:true,
            message:"Update Successful."
        })
    }
}