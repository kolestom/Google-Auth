const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = 3333
const wordRoute = require('./routes/words')
const loginRoute = require('./routes/login')
const tokenRoute = require('./routes/getToken')


app.use(cors())
app.use(express.json())
app.use('/api/words', wordRoute)
app.use('/api/login', loginRoute)
app.use('/api/gettoken', tokenRoute)



mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/GoogleAuthTamas')
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port,()=>{
        console.log(`Megy a szerver a ${port}-es porton a Google Auth feladathoz`)
    })   
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });