const Store = require("../Model/Produce");
const getAllProduce = async (req, res, next) =>{
    let store;
    try{
        store = await Store.find()
    }catch(err){
        console.log(err)
    }
    if(!store){
        return res.status(404).json({message: "No Items Found"})
    }
    return res.status(200).json({store});
};
const getById = async (req, res, next) =>{
    const id = req.params.id;
    let produce;
    try{
        produce = await Store.findById(id);
    }catch(err){
        console.log(err)
    }
    if(!produce){
        return res.status(404).json({message: "Item Not FOund"})
    }
    return res.status(200).json({item});
};
const addproduce = async (req, res, next) =>{
    const {foodName, arrivalDate, inStock} = req.body;
    let newProduce;
    try{
        newProduce = new Store({
            foodName,
            arrivalDate,
            inStock,
        });
        await newProduce.save();
    }catch(err){
        console.log(err)
    }
    if(!newProduce){
        return res.status(500).json({message: "Unable to Add Item"})
    }
    return res.status(201).json({newProduce})
};
const updateProduce = async (req, res, next) =>{
    const id = req.params.id;
    const {foodName, arrivalDate, inStock} = req.body;
    let produce;
    try{
        produce = await Store.findByIdAndUpdate(id, {
            foodName,
            arrivalDate,
            inStock
        });
        produce = await produce.save();
    }catch(err){
        console.log(err);
    }
    if(!produce){
        return res.status(404).json({message: "Unable To Update By ID Value"})
    }
    return res.status(200).json({produce});
};
const deleteProduce = async (req, res, next) =>{
    const id = req.params.id;
    let produce;
    try{
        produce = await Store.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!produce){
        return res.status(404).json({message: "Unable To Delete By This ID"})
    }
    return res.status(200).json({message: "Produce Deleted Successfully"})
};
exports.getAllProduce = getAllProduce;
exports.getById = getById;
exports.addproduce = addproduce;
exports.updateProduce = updateProduce;
exports.deleteProduce = deleteProduce;