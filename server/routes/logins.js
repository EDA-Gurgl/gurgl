var express = require('express')
var router = express.Router()
var create = require('../db/members').create
var auth = require('../lib/auth')


router.post('/register', (req, res, next) => {
  create(req.body.username, req.body.password, req.app.get('db'))
  .then(() => next())
  .catch((err) => res.status(500).json(err))
}, auth.issueJwt)


router.post('/login', auth.issueJwt)

module.exports = router
