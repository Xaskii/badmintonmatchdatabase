const matchesRouter = require('express').Router()

matchesRouter.get('/', async (req, res) => {
  res.json({ msg: 'hi' })
})

module.exports = matchesRouter
