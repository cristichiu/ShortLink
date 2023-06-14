const express = require('express')
const app = express()
const port = 3000

const Datastore = require('nedb')
const userDB = new Datastore({ filename: './databse/user.txt' });
const linkDB = new Datastore({ filename: './databse/link.txt' });
userDB.loadDatabase(function (err) { if(err) { console.log(err) } else { console.log("user database - run") } });
linkDB.loadDatabase(function (err) { if(err) { console.log(err) } else { console.log("link database - run") } });
module.exports = { userDB, linkDB }

const userRouter = require('./routers/user')
const linkRouter = require('./routers/link')

app.use('/', userRouter)
app.use('/', linkRouter)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})