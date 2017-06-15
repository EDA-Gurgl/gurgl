var express = require('express')
var router = express.Router()
var create = require('../db/members').create
var auth = require('../lib/auth')
var verifyJwt = require('express-jwt')

router.post('/register', (req, res, next) => {
  create(req.body.username, req.body.password, req.app.get('db'))
  .then(() => next())
  .catch((err) => res.status(500).json(err))
}, auth.issueJwt)


router.post('/login', auth.issueJwt)


///routes below are private
router.use(
  verifyJwt({
    secret: getSecret
  }),
  auth.handleError
)

router.get('/account', (req, res) => {
  res.send('hi')
})

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

module.exports = router
