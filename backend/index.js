const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO).then(() => console.log("MongoDB conectat"))
const userDB = require("./databse/user")
const linkDB = require("./databse/link")
module.exports = { userDB, linkDB }

const userRouter = require('./routers/user')
const linkRouter = require('./routers/link')

app.use('/', userRouter)
app.use('/', linkRouter)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})