"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const QuestionSchema = new mongoose_1.Schema({
    quizId: { type: String },
    question: { type: Array },
    marks: { type: Number },
    answer: { type: Number }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Question", QuestionSchema);
