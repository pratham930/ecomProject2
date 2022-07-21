import express from "express"
import cors from "cors"
import dotenv from "dotenv"
const app = express()
import connectDB from "./db/connectdb.js"
import cookieParser from "cookie-parser"

import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
const port = process.env.PORT || '9000'
const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://localhost:27017"


connectDB(DATABASE_URL)

app.use(cookieParser())
app.use(express.json())
dotenv.config({path:'./config.env'})
app.use(cors())
app.use(express.static('public/uploads/pimage'))

app.use('/api', authRoute);
app.use('/api', userRoute);


app.listen(port, ()=>{
    console.log(`local host:${port}`)
});
