const express = require("express");
const {registerUser,loginUser,getMyProfile, getlikedBuildingsArray} = require("../controllers/userController")
const asyncHandler = require("../utils/asyncHandler");
const authMiddleware = require("../middleware/authmiddleware");
const {registerValidation,loginValidation} = require("../validators/userValidator")
const validationMiddleware = require("../middleware/validationMiddleware");
const verifyToken = require("../controllers/verifyToken")
const router = express.Router();

router.post("/register",registerValidation,validationMiddleware,asyncHandler(registerUser));
router.post("/login",loginValidation,validationMiddleware,asyncHandler(loginUser));
router.get("/profile/me",authMiddleware,asyncHandler(getMyProfile));
router.get("/getlikedBuildingsArray",authMiddleware,asyncHandler(getlikedBuildingsArray));
router.get("/verify/:token",asyncHandler(verifyToken))
module.exports = router;










