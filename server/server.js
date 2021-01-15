require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// uses mongoose to connect to mongo database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
// middleware
app.use(express.json())
// route for all users information, adding or deleting
const adminRouter = require('./routes/user.admin')
app.use('/db/admin', adminRouter)

// connect to port 5000 with confirmation log
app.listen(5000, () => console.log('server started'))