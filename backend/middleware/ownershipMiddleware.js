const Building = require("../models/Building");

const ownershipMiddleware = async(req,res,next)=>{
    const building = await Building.findById(req.params.id);
    if(!building){
        return res.status(404).json({
            message:"Building not found"
        })
    };
    //  .equals is used in express which helps to compare objectId with string,here objectId is building.ownerand string is req.user.userId
    if(!(building.owner.equals(req.user.userId) || req.user.role === "admin")) {
        return res.status(403).json({
            message: "Access denied"
        });
    }
    req.building = building; 
    next();
}

module.exports = ownershipMiddleware;