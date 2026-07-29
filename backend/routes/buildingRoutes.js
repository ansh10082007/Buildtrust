const express = require("express");
const {getBuildings,createBuilding,getBuilding,updateBuilding,deleteBuilding} = require("../controllers/buildingController");
const asyncHandler = require("../utils/asyncHandler");
const authMiddleware = require("../middleware/authmiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const ownershipMiddleware = require("../middleware/ownershipMiddleware");
const likeBuilding = require("../controllers/likeController");
const unlikeBuilding = require("../controllers/unlikeController");
const validationMiddleware = require("../middleware/validationMiddleware");
const {buildingCreationValidation} = require("../validators/buildingValidator")
const router = express.Router();

router.get("/",asyncHandler(getBuildings));

router.get("/:id",asyncHandler(getBuilding))

router.post("/",authMiddleware,adminMiddleware,buildingCreationValidation,validationMiddleware,asyncHandler(createBuilding));

router.put("/:id",authMiddleware,asyncHandler(ownershipMiddleware),asyncHandler(updateBuilding));

router.delete("/:id",authMiddleware,asyncHandler(ownershipMiddleware),asyncHandler(deleteBuilding))

router.patch("/:id/like",authMiddleware,asyncHandler(likeBuilding))
router.patch("/:id/unlike",authMiddleware,asyncHandler(unlikeBuilding));
module.exports = router;