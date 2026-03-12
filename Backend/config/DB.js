import mongoose from "mongoose"

export const connectDB = async ()=> {
    try {
         await mongoose.connect(process.env.MONGODB_URI)
         console.log(`MongoDb sucessfully connected`)
    } catch (error) {
        console.log(`This error is coming connectDb, error->${error}`)
    }
}