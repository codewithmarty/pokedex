const express = require('express')
const router = express.Router()
const pokemonCtrl = require('../controllers/pokemon')



router.get('/', pokemonCtrl.index)

router.post('/', pokemonCtrl.addToParty)

router.delete('/:id', pokemonCtrl.release)

router.get('/random', pokemonCtrl.getRandomPokemon)

module.exports = router