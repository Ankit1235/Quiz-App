"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = require("express");
var quizRoutes_1 = require("./routes/quizRoutes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use("/createQuiz", quizRoutes_1.default);
exports.app.use(function (req, res, next) {
    next("Endpoint not found!");
});
exports.app.use(function (error, req, res, next) {
    console.error(error);
    var errorMessage = "something wrong!";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    res.status(500).json({ error: errorMessage });
});
// app.use("/createQuiz",  async(req, res) => router )
// app.use("/home", (req : Request, res : Response) =>
// {
//     res.send("Home Page");
// });
// app.use("/login", (req : Request, res : Response) =>
// {
//     res.send("Login Page");
// });
// app.use("/createQuiz", async (req : Request, res : Response) =>
// {
//     try {
//         const { title, questionType, totalMarks, totalTime, totalQuestions } = req.body;
//         const newQuiz = new QuizModel({
//             title, 
//             questionType, 
//             totalMarks, 
//             totalTime,
//             totalQuestions,
//         });
//         const {  quizId, question, marks, answer } = req.body;
//         let newQuestion;
//         let addition_question = new AdditionProblems();
//         for(let i = 0; i < newQuiz.totalQuestions; i++) {
//                 newQuestion = new QuestionModel({
//                     quizId : newQuiz._id,
//                     question : addition_question.n_stage_problem(3),
//                     marks,
//                     answer
//         });
//                 if(newQuestion) await newQuestion.save();
//         }
//         if(newQuiz) await newQuiz.save();
//         res.status(200).json({ status : 'New Quiz is created'});
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error : "Some problem occured in creating new quiz!"});
//     }
// });
//  app.post("/quiz", async (req : Request, res : Response) =>
//  {
//     res.send("Quiz started");
//  });
// app.use("/results", (req : Request, res : Response) =>
// {
//     res.send("results");
// });
// app.use("/progress", (req : Request, res : Response) =>
// {
//     res.send("Progress Page");
// });
