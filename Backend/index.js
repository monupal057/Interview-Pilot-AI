import { configDotenv }  from 'dotenv'
import express from 'express'
import  {connectDB} from './config/DB.js'
import cookieParser from 'cookie-parser'
import userRouter from "./Routes/user.routes.js";
import sessionRouter from "./Routes/session.routes.js";
import questionRoute from "./Routes/question.route.js";

// import userRouter from './Routes/user.routes.js'
// import sessionRouter from './Routes/session.routes.js'
// import questionRoute from "./Routes/question.route.js";

configDotenv({})
 const app = express()

 app.use(express.json)
 app.use(cookieParser)
 app.use(express.urlencoded({extended:true}))

 app.use("/api/v1/user", userRouter);
app.use("/api/v1/session", sessionRouter);
app.use("/api/v1/question", questionRoute);



//  app.use('/api/v1/user', userRouter)
//  app.use("/api/v1/session", sessionRouter);
// app.use("/api/v1/question", questionRoute);


 const PORT = process.env.PORT || 4000

 app.listen(PORT,()=>{
    connectDB()
     console.log(`server started on port ->${PORT}`)
 })

