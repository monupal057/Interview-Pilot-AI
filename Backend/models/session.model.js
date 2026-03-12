import mongoose from "mongoose";

const sessionschema = new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    topicTofocus:{
        type:String,
        required:true
    },
    questions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Question"
    }]
},{timestamps:true})
    export const Session = mongoose.model("Session",sessionschema)