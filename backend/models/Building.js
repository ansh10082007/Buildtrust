const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema({
    name:String,
    image:String,
    img1:String,
    img2:String,
    img3:String,
    city:String,
    area:String,
    price:Number,
    price_sqft:Number,
    bhk:Number,
    carpet_area:Number,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const Building = mongoose.model("Building",buildingSchema);

module.exports = Building;

