import { configDotenv }  from 'dotenv'
import express from 'express'
import { connectDB } from './config/DB.js'
 const app = express()

 configDotenv({})
 const PORT = process.env.PORT || 4000

 app.listen(PORT,()=>{
    connectDB()
     console.log(`server started on port ->${PORT}`)
 })

