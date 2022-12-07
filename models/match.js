const mongoose = require('mongoose')

const matchSchema = new mongoose.Schema({
  date: {
    required: true,
    type: Date,
  },
  players: {
    home: String,
    away: String,
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
