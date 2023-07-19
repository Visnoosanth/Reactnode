import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";


const app=express();

const CONNECTION_URL='';
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>app.listen(PORT, ()=> console.log(`Server Connected: ${PORT}`)))
.catch((error)=>console.log(error.message));
