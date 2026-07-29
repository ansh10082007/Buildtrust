const mongoose = require("mongoose");
const express = require("express");
const Building = require("./models/Building");

const app = express();
app.use(express.json());

//related to CRUD operations in node.js
// //Related to GET(R=read data)

// //1.res.send and res.json
// app.get("/", (req, res) => {
// res.send("Hello from BuildTrust Backend!");
// });
// app.get("/profile",(req,res)=>{
//     res.json({
//         "name":"Ansh",
//         "age":18,
//         "City":"mumbai"
//     });
// });

// const buildings = [
//     {
//         id:1,
//         name:"Aurora tower",
//         city:"Mumbai"
//     },
//     {
//         id:2,
//         name:"Sky heights",
//         city:"Pune"
//     },
//     {
//         id:3,
//         name:"Bhoomi park",
//         city:"Mumbai"
//     }
// ]

// //.params
// app.get("/buildings/:id",(req,res)=>{
//     const id = req.params.id;
//     const building = buildings.find(
//         (b)=>(b.id == Number(id))
//     )

//     if(!building){
//         return res.status(404).json({
//             message:"Building not found"
//         })
//     }

//     res.json(building);
// })

// // .query
// app.get("/search",(req,res)=>{
//     const city = req.query.city;

//     const filterBuildings = buildings.filter(
//         (b)=>b.city === city
//     );

//     res.json(filterBuildings);
// });


// //related to POST(C=create data)
// app.post("/profile",(req,res)=>{
//     console.log(req.body);
//     res.json({
//         message: "Profile received"
//     });
// });

// app.get("/buildings",(req,res)=>{
//     res.json(buildings);  //buildings is the array which we defined at line-20
// });

// app.post("/buildings",(req,res)=>{
//     buildings.push(req.body);

//     res.json({
//         message:"Buidlings added"
//     })
// })

// //related to PUT (U = update data)
// app.put("/buildings/:id",(req,res)=>{
//     const id = Number(req.params.id);

//     const building = buildings.find(
//         (b) => b.id == id
//     );

//     if (!building) {
//         return res.status(404).json({
//             message: "Building not found"
//         });
//     }

//     building.name = req.body.name;

//     res.json({
//         message:"Building updated"
//     });
// })


// //related to delete (D = delete data)
// app.delete("/buildings/:id",(req,res)=>{
//     const id = Number(req.params.id);

//     const index = buildings.findIndex(
//         (b) => b.id === id
//     );

//     if(index === -1){
//         return res.status(404).json({
//             message:"Building not found"
//         });
//     }
//     buildings.splice(index,1);

//     res.json({
//         message:"Building deleted"
//     });
// })


//Related to mongoDB and the operations we done above

// app.get("/add-building",async(req,res)=>{
//     const building = await Building.create({
//         name:"Arora Tower",
//         city:"Mumbai"
//     });
//     res.json(building);
// }) //this one code was sample , never use get to create/update data


//Read data from MongoDb
// app.get("/buildings-db",async(req,res)=>{
//     const buildings = await Building.find();  //returns all documents in the collection
//     // const buildings = await Building.find({city:"Mumbai"});  returns all matches  

//     res.json(buildings);
// })

// app.get("/first-building",async(req,res)=>{
//     const building = await Building.findOne({name:"Arora Tower"});//returns first match only
//     res.json(building);
// })

// app.get("/buildings-db/:id",async(req,res)=>{
//     const building = await Building.findById(req.params.id);

//     res.json(building);
// })

// update a mongoDb
//     app.put("/buildings-db/:id",async(req,res)=>{
//         await Building.updateOne(
//             {_id:req.params.id},
//             {name:req.body.name}
//         );

//         res.json({message:"Building updated"});
//     })

//     app.delete("/buildings-db/:id",async(req,res)=>{
//         await Building.deleteOne({_id:req.params.id});
//         res.json({message:"Building deleted"});
//     })


app.get("/buildings", async (req, res) => {
    const buildings = await Building.find();
    res.json(buildings);
})

app.post("/buildings",async(req,res)=>{
    const building = await Building.create(req.body);
    res.json(building);
})

app.get("/buildings/:id",async (req,res)=>{
    const building = await Building.findById(req.params.id);
    //this building is not a object it gets connected to that mongoDb document so when u chaneg anything to building it will get updated in database
    //so here we can use methods like: building.save(),building.deleteOne(),building.populate(),building.validate()
    res.json(building);
})

app.put("/buildings/:id",async (req,res)=>{
    const building = await Building.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )

    if(!building){
        return res.status(404).json({
            message:"Buildng Not found"
        });
    }
    res.json(building);
})

app.delete("/buildings/:id",async(req,res)=>{
    
    const building = await Building.findByIdAndDelete(req.params.id);

    if(!building){
        return res.status(404).json({
            message:"Building not found"
        });
    }

    res.json({message:"Building deleted"});
})
mongoose.connect("mongodb+srv://anshbomble37:5O4U1q1CWDzwnWmI@cluster0.p5vasxl.mongodb.net/?appName=Cluster0")
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

