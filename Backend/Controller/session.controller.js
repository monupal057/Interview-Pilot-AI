import {Session} from "../models/session.model.js";
import {Question} from "../models/question.model.js";
export const createSession = async(req, res)=> {
    try{
        const{role, experience, topicTofocus} = req.body;
        const userId = req.id

        if(!role || !experience || !topicTofocus){
            return res.status(401).json({
                message:"Please provide all the details"
            })
        }

        const session = await session.create({
            user:userId,
            role,
            experience,
            topicTofocus
        })

        await session.save()

        return res.status(201).json({
            message:"Session created successfully"
        })

    }catch (error){
        console.log(`This error is coming from createSession , error->${error}`)
    }
}

export const getSession = async(req, res)=> {
    try{
        const userId = req.id
        const session = await Session.find({user:userId})
        .sort({createdAt:-1})
        .populate("questions")

        res.status(201).json({
            session
        })

    } catch (error) {
        console.log(`This error is coming from getSession , error->${error}`)
    }
}

export const getSessionById = async(req, res)=> {
    try{
        const session = await Session.findById(req.params.id)
        .sort({createdAt:-1})
        .populate({
            path:"questions",
            options:{sort:{isPinned:-1}, createAt:-1}
        })
        res.status(201).json({
            session
        })
            
    } catch(error) {
        console.log(`This error is coming from getSessionById, error->${error}`)
    }
}

 export const deleteSession = async(req, res)=> {
    try{
        const session = await Session.findById(req.params.id)

        if(!session){
            return res.status(401).json({
                message:"Session not found"
            })
        }

        await Question.deleteMany({session:session._id})

        await session.deleteOne()

        return res.status(201).json({
            message:"Session deleted successfully"
        })

    } catch (error) {
        console.log(`This error is coming from deleteSession, error->${error}`)
    }
 }
