import express, { NextFunction, Router } from 'express';
import { Request, Response } from 'express';
import QuizModel from './models/quizModel';
import QuestionModel from './models/questionModel';
import { AdditionProblems } from './questionAlgorithm/addition_';
import router from './routes/quizRoutes';
import cors from 'cors';


export const app = express();
app.use(cors());
app.use(express.json());
app.use("/createQuiz", router);
app.use((req, res, next) =>
{
    next("Endpoint not found!");
});

app.use((error : unknown, req : Request, res : Response, next : NextFunction) =>
{
    console.error(error);
    let errorMessage = "something wrong!"
    if(error instanceof Error)
        {
            errorMessage = error.message;
        }

    res.status(500).json({error : errorMessage})

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
          