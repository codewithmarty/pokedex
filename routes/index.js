var express = require('express');
var router = express.Router();
const passport = require('passport')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/pokedex')
});

router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About the Pokedex',
    user: req.user,
  })
})

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/pokedex',
    failureRedirect : '/pokedex'
  }
));

router.get('/logout', function(req, res){
  req.logout((err) => {
    if (err) console.error(err)
    res.redirect('/pokedex');
  });
});

module.exports = router;
