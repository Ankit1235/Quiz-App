import { RequestHandler } from "express";
import QuizModel from "../models/quizModel";
import QuestionModel from "../models/questionModel";
import { AdditionProblems } from '../questionAlgorithm/addition_';

export const getQuestions : RequestHandler = async(req , res, next) =>
    {
        let questions = await QuestionModel.find().exec();
        res.status(200).json(questions);
    }

export const getQuizzes : RequestHandler = async (req, res, next) =>
    {
        let quizzes = await QuizModel.find().exec();
        res.status(200).json(quizzes);
    }

export const getQuiz: RequestHandler = async (req, res, next) => {
        try {
            const questions = await QuestionModel.find({ quizId: req.params.id });
            if (questions.length === 0) {
                return res.status(404).json({ message: "No questions found for this quiz ID" });
            }
            res.status(200).json(questions);
        } catch (error) {
            next(error);
        }
    }


    export const createQuiz : RequestHandler = async(req, res, next) =>
        {
            // quiz
            const {
                quizId, 
                title, 
                questionType, 
                totalQuestions, 
                totalMarks, 
                totalTime,  
                question, 
                marks, 
                answer  
            } = req.body;
            
            let newQuestionObj = new AdditionProblems();  
            //questions 
        
            try {
                const quiz = await QuizModel.create({
                    title : title,
                    questionType : questionType,
                    totalQuestions :  totalQuestions,
                    totalMarks : totalMarks,
                    totalTime : totalTime
                });
        
                for(let i=0; i<totalQuestions;i++) {            
                    let new_question = newQuestionObj.n_stage_problem(3);   
                    const questions = await QuestionModel.create({
                    quizId : quiz._id,
                    question : new_question[0],
                    marks : Math.floor(totalMarks / totalQuestions),
                    answer : new_question[1] 
                });
                }
                
                // Fetch the newly created quiz with populated questions
                const createdQuiz = await QuizModel.findById(quiz._id).sort({$natural:-1}).limit(1);
                res.status(200).json({success : "quiz is succesfully created", quiz : createdQuiz});
    
            } catch (error) { next(error); }
        
        }
        
        