const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./config/db.js');
const todoRoutes=require('./routes/todoRoutes.js');

dotenv.config();

const app=express();

const PORT=process.env.PORT || 5000;

//database connection
connectDB();


//middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/todos',todoRoutes);


app.get('/',(req,res)=>{
    res.send('hello world');
})

// app.listen(PORT,()=>{
//     console.log(`server is running on ${PORT}`);
// })

module.exports=app;