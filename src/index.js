import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import{DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        comsole.log(`server is running at port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO db connecion failed !!! ", err)
})




































































// first approch to connect database


// import express from "express";
// const app = express()
// ;(async()=>{
//     try {

//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR",error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Appp is listening on port ${process.env.PORT}`);
//         })
        
//     } catch (error) {
//         console.error("ERROR :", error)
//         throw err
//     }
// })()



