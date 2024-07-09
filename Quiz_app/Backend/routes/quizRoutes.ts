import * as quizontroller from "../controller/quizController";
import { Router } from 'express';

const router = Router();


router.get("/attemptQuiz", quizontroller.getQuestions);
router.get("/exploreQuiz", quizontroller.getQuizzes);
router.get("/exploreQuiz/:id", quizontroller.getQuiz);

router.post("/", quizontroller.createQuiz);

export default router;

