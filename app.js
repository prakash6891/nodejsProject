import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
import bodyParser from "body-parser"
import userRouter from "./Route/userRouter.js"
import postRouter from "./Route/postRouter.js"
import connectDB from "./util_db/db_connection.js"

const port = process.env.PORT || '3000'
const database_url = process.env.DATABASE_URL

// set bodyParser for incoming req obj.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//set Router middlware
app.use('/', userRouter)
app.use('/', postRouter)

//mongodb setup
connectDB(database_url)

// server listing
app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})