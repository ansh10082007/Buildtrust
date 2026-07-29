const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema({
    name:String,
    city:String,
    area:String,
    price:Number,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const Building = mongoose.model("Building",buildingSchema);

module.exports = Building;

