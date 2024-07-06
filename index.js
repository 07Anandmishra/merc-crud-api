import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import route from './Routes/userRoute.js'

dotenv.config()

const app = express()
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 5000
const URL = process.env.MONGO_URL

mongoose.connect(URL)
  .then(() => {
    console.log('DB connected')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(error => console.log('Error connecting to MongoDB:', error))

app.use("/api",route)
app.get('/', (req, res) => {
  res.send('Server is running');
});