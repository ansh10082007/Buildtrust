const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin","builder"],
        default:"user"
    },
    likedBuildings:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Building"
        }
    ],
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String
    },
    verificationTokenExpires:{
        type:Date
    }

},{timestamps:true});


const User = mongoose.model("User",userSchema);

module.exports = User;

