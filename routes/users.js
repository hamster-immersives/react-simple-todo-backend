var express = require('express');
var router = express.Router();
const passport = require('passport')

var userController = require('../controllers/userController');

/* GET users listing. */

router.get('/', function(req, res, next) {
  res.send('YOU HAVE HIT THIS ENDPOINT');
});

router.post('/auth', function(req, res, next) {
  userController.registerAndSignUp(req.body)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.json(err)
    })
});


router.get('/currentuser', passport.authenticate('jwt', {session: false}),  function(req, res) {
  res.json({
    id: req.user.id,
    email: req.user.email
  })
})

module.exports = router;
