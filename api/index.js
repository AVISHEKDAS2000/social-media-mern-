const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const morgan=require("morgan");
const helmet=require("helmet");
const userRoute=require("./routes/users");
const userAuth=require("./routes/auth");
const postRoute=require("./routes/posts");
const multer=require("multer");
const path=require("path");



dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log("Connected to MONGODB")
});

app.use("/images",express.static(path.join(__dirname,"public/images")));

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


const fileStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images");
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});

const upload=multer({storage:fileStorage});//Slight change from video{storage:fileStorage}

app.post("/api/upload",upload.single("file"),(req,res)=>{
    try{
        return res.status(200).json("File uploaded successfully")
    }
    catch(err)
    {
        console.log(err);
    }
})



app.use("/api/users",userRoute);
app.use("/api/auth",userAuth);//Name changed in video UserAuth=AuthRoute
app.use("/api/posts",postRoute);


app.listen(8800,()=>{
    console.log("Backend server is running");
})