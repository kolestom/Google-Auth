require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3333
const wordRoute = require('./routes/words')
const loginRoute = require('./routes/login')
// const authMW = require('./middleware/authMW')


app.use(cors())
app.use(express.json())
// app.use(authMW)
app.use('/api/words', wordRoute)
app.use('/api/login', loginRoute)


mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port,()=>{
        console.log(`Megy a szerver a ${port}-es porton a Google Auth feladathoz`)
    })   
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });