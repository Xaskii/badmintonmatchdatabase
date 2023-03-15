const http = require('http')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
require('express-async-errors')
const middleware = require('./utils/middleware')
const config = require('./utils/config')
const matchesRouter = require('./controllers/matches')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const app = express()

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error: any) => {
    console.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use(middleware.tokenExtractor)
app.use(morgan('combined'))

app.use('/api/matches', matchesRouter)
app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

const server = http.createServer(app)

const PORT = config.PORT
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

export {}

