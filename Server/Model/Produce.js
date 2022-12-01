const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const storeSchema = new Schema({
    foodName:{
        type: String,
        require: true,
    },
    arrivalDate:{
        type:  String,
        require: true,
    },
    inStock:{
        type: Boolean,
    }
})
module.exports = mongoose.model("Produce", storeSchema);