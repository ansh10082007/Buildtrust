const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendVerificationEmail = require("../utils/sendVerificationEmail");

const registerUser = async(req,res)=>{
    const existingUser = await User.findOne({
        email:req.body.email
    })
    if(existingUser){
        return res.status(400).json([{
            path:"email",
            msg:"Email already exists"
        }])
    }

    const hashedPassword = await bcrypt.hash(req.body.password , 10);
    const verificationToken = crypto.randomBytes(32).toString("hex")
    
    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        verificationToken:verificationToken,
        verificationTokenExpires:new Date(Date.now() + 86400000)
    });
    await sendVerificationEmail(user.email,verificationToken)
    return res.json({message:"Account created successfully"})
}

const loginUser = async(req,res)=>{

    const existingUser = await User.findOne({
        email:req.body.email
    });

    if(!existingUser){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    };

    const isMatch = await bcrypt.compare(req.body.password , existingUser.password);

    if(!isMatch){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }

    if(!existingUser.isVerified){
        return res.status(403).json({
            message:"Please verify/register your email before logging in"
        })
    }

    const payload = {
        userId:existingUser._id,
        role:existingUser.role
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"7d"});

    return res.json({
        message:"Login successful",
        token
    })
}

const getlikedBuildingsArray = async(req,res)=>{
    const user = await User.findById(req.user.userId).populate("likedBuildings","_id name city area price")
    if(!user){
        return res.status(400).json({
            message:"User not found"
        })
    }
    const likedBuildings = user.likedBuildings;
    return res.json(likedBuildings);
}

const getMyProfile = async(req,res)=>{
    const user = await User.findById(req.user.userId);

    if(!user){
        return res.status(400).json({
            message:"User not found"
        })
    }

    return res.json({
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role,
        likedBuildingsIds:user.likedBuildings
    });
}

module.exports = {
    registerUser,
    loginUser,
    getMyProfile,
    getlikedBuildingsArray
}
