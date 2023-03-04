const Pokemon = require('../models/pokemon')
const axios = require('axios')
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

const index = async (req, res) => {
    try {
        const yourPokemon = await Pokemon.find({ user: req.user.id })
        if (!yourPokemon.length) {
            const starters = [await axios.get(BASE_URL+1), await axios.get(BASE_URL+4), await axios.get(BASE_URL+7)]
            res.render('pokemon/index', { 
                title: 'Pokemon',
                user: req.user,
                yourPokemon,
                starters
            })
        } else {
            const starters = []
            res.render('pokemon/index', { 
                title: 'Pokemon',
                user: req.user,
                yourPokemon,
                starters
            })
        }
    } catch (err) {
        console.error(err)
        res.redirect('/pokemon')
    }
}

const addToParty = async (req, res) => {
    try {
        req.body.abilities = req.body.abilities.split(',')
        req.body.moves = req.body.moves.split(',')
        await Pokemon.create(req.body)
        res.redirect('/pokemon')
    } catch (err) {
        console.error(err)
        res.redirect('/pokemon')
    }
}

const release = async (req, res) => {
    try {
        await Pokemon.findByIdAndDelete(req.params.id)
        res.redirect('/pokemon')
    } catch (err) {
        console.error(err)
        res.redirect('/pokemon')
    }
}

const getRandomPokemon = async (req, res) => {
    try {
       const randomPokemon = await axios.get(BASE_URL+Math.floor(Math.random() * (1008 - 1 + 1) + 1))
       if (randomPokemon.data.game_indices[3].game_index) {
           res.render('pokemon/random', {
            title: 'The Wild', 
            user: req.user,
            pokemon: randomPokemon 
        })
       }
    } catch (err) {
        console.error(err)
        res.redirect('/pokemon')
    }
}

module.exports = {
    index,
    addToParty,
    release,
    getRandomPokemon
}