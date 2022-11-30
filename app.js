const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const config = require('./utils/config')
require('express-async-errors')

const matchesRouter = require('./controllers/matches')

const app = express()

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message)
  })

app.use(morgan('combined'))

app.use('/api/matches', matchesRouter)

module.exports = app
