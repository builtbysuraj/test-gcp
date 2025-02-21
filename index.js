import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { Post } from './post.model.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const DB_NAME = 'test'

app.get('/', (req, res) => {
  res.json({ data: 'Hello there' })
})

app.post('/form', (req, res) => {
  const data = req.body
  res.json({ data })
})

app.get('/data', async (req, res) => {
  try {
    const allData = await Post.find()
    res.status(200).json({ message: 'Success', data: allData })
  } catch (error) {
    console.error('Error while fetching data: ', error)
    res.json({ message: 'Error', data: error })
  }
})

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
    console.log('MongoDB connected')
  } catch (error) {
    console.log('MongoDB connection FAILED ', error)
  }
}

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running in ${PORT} `))
  })
  .catch(() => {
    console.error('Something went wrong')
  })
