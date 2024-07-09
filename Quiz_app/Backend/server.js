"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
app_1.app.use(express_1.default.json());
const PORT = 5500;
try {
    mongoose_1.default.connect("mongodb+srv://ankit:atkoHgY9V76wjbY9@cluster0.1fr0zyw.mongodb.net/Quiz?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
        console.log("Mongoose Connected");
        app_1.app.listen(PORT, () => {
            console.log("Server is running port ", PORT);
        });
    });
}
catch (error) {
    console.log("Facing problem in connecting with database!");
    console.error(error);
}
