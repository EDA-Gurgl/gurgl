var express = require('express')
var router = express.Router()
var create = require('../db/members').create
var auth = require('../lib/auth')
var verifyJwt = require('express-jwt')

var favouriteDb = require('../db/favourites')

router.post('/register', (req, res, next) => {
  create(req.body, req.app.get('db'))
  .then(() => {
    next()
  })
  .catch((err) => {
    if (err.errno) return res.sendStatus(409)
    else res.sendStatus(500)
  })
}, auth.issueJwt)

router.post('/login', auth.issueJwt)

// /routes below are private
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
)

router.get('/account', (req, res) => {
  res.json({
    message: 'This is a SECRET quote.',
    user: `Your user ID is: ${req.user.id}`
  })
})

router.get('/favourites', (req, res) => {
  favouriteDb.getFavouritesByUser(req.app.get('db'), req.user.id)
    .then(favourites => {
      res.json(favourites)
    })
    .catch((err) => {
      res.sendStatus(500)
    })
})

router.post('/favourites', (req, res) => {
  favouriteDb.addFavourite(req.app.get('db'), req.user.id, req.body.clothingId)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      res.sendStatus(500)
    })
})

router.delete('/favourites', (req, res) => {
  favouriteDb.deleteFavourite(req.app.get('db'), req.user.id, req.body.clothingId)
    .then(() => {
      res.sendStatus(204)
    })
    .catch((err) => {
      res.sendStatus(500)
    })
})

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

module.exports = router
