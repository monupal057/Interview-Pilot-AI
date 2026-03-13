import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    session:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Session"
    },
    question:{
        type:String
    },
    answer:{
        type:String
    },
    note:{
        type:String
    },
    ispinned:
    {type:Boolean,
        default:false
    }
    },{timestams:true})

    export const Question = mongoose.model("Question",questionSchema)