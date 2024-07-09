"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuiz = exports.getQuiz = exports.getQuizzes = exports.getQuestions = void 0;
const quizModel_1 = __importDefault(require("../models/quizModel"));
const questionModel_1 = __importDefault(require("../models/questionModel"));
const addition_1 = require("../questionAlgorithm/addition_");
const getQuestions = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let questions = yield questionModel_1.default.find().exec();
    res.status(200).json(questions);
});
exports.getQuestions = getQuestions;
const getQuizzes = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let quizzes = yield quizModel_1.default.find().exec();
    res.status(200).json(quizzes);
});
exports.getQuizzes = getQuizzes;
const getQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const questions = yield questionModel_1.default.find({ quizId: req.params.id });
        if (questions.length === 0) {
            return res.status(404).json({ message: "No questions found for this quiz ID" });
        }
        res.status(200).json(questions);
    }
    catch (error) {
        next(error);
    }
});
exports.getQuiz = getQuiz;
const createQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // quiz
    const { quizId, title, questionType, totalQuestions, totalMarks, totalTime, question, marks, answer } = req.body;
    let newQuestionObj = new addition_1.AdditionProblems();
    //questions 
    try {
        const quiz = yield quizModel_1.default.create({
            title: title,
            questionType: questionType,
            totalQuestions: totalQuestions,
            totalMarks: totalMarks,
            totalTime: totalTime
        });
        for (let i = 0; i < totalQuestions; i++) {
            let new_question = newQuestionObj.n_stage_problem(3);
            const questions = yield questionModel_1.default.create({
                quizId: quiz._id,
                question: new_question[0],
                marks: Math.floor(totalMarks / totalQuestions),
                answer: new_question[1]
            });
        }
        // Fetch the newly created quiz with populated questions
        const createdQuiz = yield quizModel_1.default.findById(quiz._id).sort({ $natural: -1 }).limit(1);
        res.status(200).json({ success: "quiz is succesfully created", quiz: createdQuiz });
    }
    catch (error) {
        next(error);
    }
});
exports.createQuiz = createQuiz;
