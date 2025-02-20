import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.json({ data: 'Hello there' })
})

app.listen(PORT, () => console.log(`Server is running in ${PORT} `))
