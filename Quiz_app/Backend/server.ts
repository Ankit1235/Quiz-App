
import express from 'express';
import { app } from "./app";
import mongoose from "mongoose";
app.use(express.json());
const PORT = 5500;

try {
    mongoose.connect("mongodb+srv://ankit:atkoHgY9V76wjbY9@cluster0.1fr0zyw.mongodb.net/Quiz?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log("Mongoose Connected");
    app.listen(PORT, () =>
{
    console.log("Server is running port ", PORT);
});
});
    
} catch (error) {
    console.log("Facing problem in connecting with database!")
    console.error(error);  
}


