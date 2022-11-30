const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const config = require('./utils/config')
require('express-async-errors')

const matchesRouter = require('./controllers/matches')

const app = express()
const logger = morgan('combined')

app.use('/api/matches', matchesRouter)

module.exports = app
