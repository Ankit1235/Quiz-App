import { InferSchemaType, Schema, model } from "mongoose";

const QuizSchema = new Schema({
    title : {type : String},
    questionType : {type : String},
    totalMarks : { type :  Number},
    totalTime : { type : Number},
    totalQuestions : {type : Number, required : true}
}, {timestamps : true});

type QuizModel = InferSchemaType<typeof QuizSchema>
export default model<QuizModel>("Quiz", QuizSchema);


