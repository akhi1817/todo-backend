const mongoose=require('mongoose');

const connectDB=async(req,res)=>{
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log('databse connected');
    }
    catch(err){
        console.log('error in connecting databse',err);
    }
}

module.exports=connectDB;