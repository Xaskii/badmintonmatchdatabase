export {}
const mongoose = require('mongoose')
console.log('test')
const matchSchema = new mongoose.Schema({
  date: {
    required: true,
    type: Date,
    default: Date.now(),
  },
  players: {
    home: String,
    away: String,
  },
  score: {
    home: {
      required: true,
      type: Number,
    },
    away: {
      required: true,
      type: Number,
    },
  },
  note: {
    required: true,
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  locationTag: String,
  tags: [String],
})

matchSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Match', matchSchema)
