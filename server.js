const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cors=require("cors");
const routeUrls=require('./routes/routes');

dotenv.config()



mongoose.connect(
    process.env.DATABASE,{
        useNewUrlParser:true,useUnifiedTopology:true
    }

).then(()=>{
    console.log("connected successfullly");
}).catch((err)=>{
    console.log("Database connection failed");
})



app.use(express.json())
app.use(cors());
app.use("/app",routeUrls);
app.listen(4000,()=>{
    console.log("server running");
});


