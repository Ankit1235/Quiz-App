"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const QuizSchema = new mongoose_1.Schema({
    title: { type: String },
    questionType: { type: String },
    totalMarks: { type: Number },
    totalTime: { type: Number },
    totalQuestions: { type: Number, required: true }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Quiz", QuizSchema);
