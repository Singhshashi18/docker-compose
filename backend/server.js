const express =require ("express");
const app=express();
const cors=require('cors');
const { default: mongoose } = require("mongoose");
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || "no connection established");
  const connection=mongoose.connection;
  connection.once('Open',()=>{
    console.log("connection established successsfully:");

  });
  app.get('/',(req,res)=>{
    res.json({message:'hello from backend'});
  });
  app.listen(5000,()=>console.log('server is running on port:5000'))

