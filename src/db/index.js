import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";

import {DB_NAME }from "../constants.js"

const connectDB = async()=>{
    try {
    

      const connectionInsrtance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n mongoDb connected !! DB HOST: ${connectionInsrtance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error ismail", error)
        process.exit(1)
    }
}

export default connectDB