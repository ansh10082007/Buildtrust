require("dotenv").config();

const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const buildingRoutes = require("./routes/buildingRoutes");

const app = express();

// //defining a custom middleware
// app.use((req,res,next)=>{
//     console.log("Method:",req.method);
//     console.log("URL:",req.url);
//     next();//next() means continue next middleware or route,if it is not called everything stops there

// });//middleware is like a security-guard at gate

// app.use((req,res,next)=>{
//     req.company = "BuildTrust";  //now we can use req.company anywhere and it returns Buildtrust
//     next();
// })

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use(express.json()); //this is buit-in middleware
app.use("/buildings",buildingRoutes); //Router-level middleware. You are telling Express: "Hey, whenever a request comes in that starts with the URL /buildings, I want you to hand it over to the buildingRoutes middleware to handle the rest."

app.use("/users",userRoutes);

app.use((err,req,res,next)=>{
    console.log(err.name);

    if(err.name === "CastError"){
        return res.status(400).json({
            success:false,
            message:"Invalid Building ID"
        })
    }

    res.status(500).json({
        success: false,
        message:"Internal server error"
    });
    
})

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDb connected");
})
.catch((error)=>{
    console.log("MongoDb connection failed:",error);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
})