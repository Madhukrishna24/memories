import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import routes from './routes/routes.js'
dotenv.config()
const app = express();
app.use(express.json())
app.use(routes)
mongoose.connect(process.env.Db).then(()=>{
    app.listen(process.env.PORT,()=>console.log(`Server is Start ${process.env.PORT}`))
})