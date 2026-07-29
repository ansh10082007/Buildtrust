const User = require("../models/User");

const verifyEmail = async(req,res,next)=>{
    const token = req.params.token;

    const user = await User.findOne({
        verificationToken:token,
        verificationTokenExpires:{$gt:Date.now()}
    })

    if(!user){
        return res.status(400).json({
            message:"token not found"
        })
    }
    user.isVerified = true;
    user.verificationToken = null;
    user.verificationTokenExpires = null;
    await user.save();
    res.redirect(`${process.env.FRONTEND_URL}/login?verified=true`);
    
}

module.exports = verifyEmail;