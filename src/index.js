import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import dotenv from "dotenv";

dotenv.config();
import express from 'express'
const app=express()
//while tring to connect to database this may cause error and it taketimes
//therefore we wrap it in try catch and asyn await

//iife function is ueed to write the function and imidiatly run it 
console.log(process.env.MONGODB_URI);

await (async () =>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}`)
    //    app.on("error",(error)=>{console.log(error)})
    } catch (error) {
        console.log(error)
        // throw new Error(error)
    }
})()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})