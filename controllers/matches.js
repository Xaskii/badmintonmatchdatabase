const matchRouter = require('express').Router()
const Match = require('../models/match')

matchRouter.get('/', async (req, res) => {
  const matches = await Match.find({}).populate('user', 'username')
  res.json(matches)
})

matchRouter.post('/', async (req, res) => {
  const body = req.body
  const match = new Match(body)

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
