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
const cors=require("cors");
const Razorpay=require("razorpay");
const shortid=require("shortid");

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

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  app.use(cors());
  app.post("/razorpay", async (req, res) => {
      const payment_capture = 1;
      const amount = 499;
      const currency = "INR";
    
      const options = {
        amount: amount * 100,
        currency,
        receipt: shortid.generate(),
        payment_capture,
      };
    
      try {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.json({
          id: response.id,
          currency: response.currency,
          amount: response.amount,
        });
      } catch (error) {
        console.log(error);
      }
    });

app.listen(8800,()=>{
    console.log("Backend server is running");
})