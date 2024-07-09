"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var express_1 = require("express");
var app_1 = require("../app");
app_1.app.use(express_1.default.json());
var PORT = 5500;
try {
    mongoose_1.default.connect("mongodb+srv://ankit:atkoHgY9V76wjbY9@cluster0.1fr0zyw.mongodb.net/Quiz?retryWrites=true&w=majority&appName=Cluster0")
        .then(function () {
        console.log("Mongoose Connected");
        app_1.app.listen(PORT, function () {
            console.log("Server is running port ", PORT);
        });
    });
}
catch (error) {
    console.log("Facing problem in connecting with database!");
    console.error(error);
}
