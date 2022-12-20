const matchRouter = require('express').Router()
const Match = require('../models/match')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

matchRouter.get('/', async (req, res) => {
  const matches = await Match.find({}).populate('user', 'username')
  res.json(matches)
})

matchRouter.post('/', async (req, res) => {
  const body = req.body

  const token = req.token
  const decodedToken = jwt.verify(token, process.env.SECRET)

  const user = await User.findById(decodedToken.id)

  const match = new Match({
    ...body,
    user: user._id,
  })

  const savedMatch = await match.save()
  res.status(201).json(savedMatch)
})

matchRouter.put('/:id', async (req, res) => {
  await Match.findByIdAndUpdate(req.params.id)
  res.status(200).end()
})

matchRouter.delete('/', async (req, res) => {
  await Match.deleteMany({})
  res.status(204).end()
})

module.exports = matchRouter
