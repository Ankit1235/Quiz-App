import { InferSchemaType, Schema, model } from "mongoose";
import QuizModel from './quizModel';

const QuestionSchema = new Schema({
    quizId : {type : String},
    question : {type : Array},
    marks : {type : Number},
    answer : { type : Number}
}, {timestamps : true});

type QuestionModel = InferSchemaType<typeof QuestionSchema>
export default model<QuestionModel>("Question", QuestionSchema);


