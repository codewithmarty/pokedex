const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: String,
  num: Number,
  height: Number,
  weight: Number,
  img: String,
  abilities: [String],
  sprites: [String],
  moves: [String],
  level: { type: Number, default: 5 },
  hp: Number,
  attack: Number,
  defense: Number,
  specialattack: Number,
  specialdefense: Number,
  speed: String,
  isStarter: { type: Boolean, default: false },
  user: { type: mongoose.Types.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Pokemon', pokemonSchema);