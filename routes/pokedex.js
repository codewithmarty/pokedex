const express = require('express')
const router = express.Router()
const pokedexCtrl = require('../controllers/pokedex')

router.get('/', pokedexCtrl.index)

router.get('/:id', pokedexCtrl.show)

module.exports = router