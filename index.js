import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ data: 'Hello there' })
})

app.post('/form', (req, res) => {
  const data = req.body
  res.json({ data })
})

app.listen(PORT, () => console.log(`Server is running in ${PORT} `))
