const mongoose=require('mongoose');
require('dotenv').config()
const connectDB=async()=>{
    try{
       await mongoose.connect(process.env.MONGOBD_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       }) ;
       console.log("MongoDB connected");

    }catch(err){
        console.error("Mongodb connection failed:",err);
    }
};
module.exports=connectDB;