const User = require("../models/User")
const Building = require("../models/Building");


const unlikeBuilding = async(req,res,next)=>{
    const user = await User.findById(req.user.userId);
    const building = await Building.findById(req.params.id);

    if(!building){
        return res.status(404).json({
            message:"Buidling not found"
        })
    };

    if(!user.likedBuildings.some((id)=>(id.equals(building.id)))){
        return res.status(409).json({
            message:"Building is not in liked list"
        })
    }

    user.likedBuildings.pull(building._id);
    await user.save();

    return res.json({
        message:"Building unliked successfully"
    });
}

module.exports = unlikeBuilding;