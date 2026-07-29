const User = require("../models/User");
const Building = require("../models/Building");

const likeBuilding = async(req,res,next)=>{
    const user = await User.findById(req.user.userId);
    const building = await Building.findById(req.params.id);
    
    if(!building){
        return res.status(404).json({
            message:"Building not found"
        })
    }
    // .some() checks if at least one ID in the likedBuildings array matches the current building ID.
    if(user.likedBuildings.some((id)=>(id.equals(building.id)))){
        return res.json({
            message:"Building already in liked list"
        })
    }

    user.likedBuildings.push(building._id);
    await user.save();

    return res.json({
        message:"Building liked successfully"
    });
}

module.exports = likeBuilding
