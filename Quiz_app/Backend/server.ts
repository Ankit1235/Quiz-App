
import express from 'express';
import { app } from "./app";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config();
app.use(express.json());
const PORT = 5500;

async function startServer() {
    try {
      await mongoose.connect(process.env.MONGO_CONNECTION_STRING as string);
      console.log("Mongoose Connected");
      app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
      });
    } catch (error) {
      console.error("Error connecting to database:", error);
    }
  }
  
startServer();