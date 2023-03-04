const axios = require('axios')

const index = async (req, res) => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0')
    const pokedex = response.data
    res.render('pokedex/index', { 
        user: req.user,
        title: 'Pokedex', 
        pokedex: pokedex.results 
    })
}

const show = async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
        const pokemon = response.data
        res.render('pokedex/show', {
            user: req.user,
            title: pokemon.name,
            pokemon
        })
    } catch (err) {
        res.redirect('/pokedex')
    }
}

module.exports = {
    index,
    show
}