const Building = require("../models/Building");

const getBuildings = async(req,res,next)=>{
    // console.log(req.company); //this has no relavance in this code ,its just added to test the middleware defined in server_router.js
    
    let filter = {};

    if(req.query.city){
        filter.city = req.query.city; 
    }
    if(req.query.area){
        filter.area = req.query.area;
    }

    if(req.query.minPrice || req.query.maxPrice){
        filter.price = {};
    }

    if(req.query.minPrice){
        filter.price.$gte = Number(req.query.minPrice)
    }

    if(req.query.maxPrice){
        filter.price.$lte = Number(req.query.maxPrice)
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    
    
    let sort = {}
    
    if(req.query.sort){
        const isDescending = req.query.sort.startsWith("-");
        const method = isDescending?req.query.sort.slice(1) : req.query.sort;

        sort[method] = isDescending? -1 : 1 ;
    }else{
        sort.name = 1
    }

    // .find({}) returns all things just as .find() does 
    const buildings = await Building.find(filter)
                                    .skip((page-1)*limit) 
                                    .limit(limit) 
                                    .sort(sort);
    
    res.json(buildings);
};

const createBuilding = async (req,res)=>{
    const building = await Building.create({
        ...req.body, //we used spread operator 
        owner:req.user.userId
    });
    res.json(building);
};

const getBuilding = async(req,res)=>{
    const building = await Building.findById(req.params.id);
    if (!building) {
        return res.status(404).json({
            message: "Building not found"
        })
    }
    res.json(building);
}

const updateBuilding = async (req,res)=>{
    
    const building = await Building.findByIdAndUpdate(req.building._id,req.body,{new:true});
    res.json(building);
}

const deleteBuilding = async(req,res)=>{
    await req.building.deleteOne();
    res.json({
        message:"Building deleted successfully"
    });
}


module.exports = {
    getBuildings,
    createBuilding,
    getBuilding,
    updateBuilding,
    deleteBuilding
};