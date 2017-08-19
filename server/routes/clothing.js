var express = require('express')
var router = express.Router()

var clothingDb = require('../db/clothing')

router.get('/clothes', (req, res) => {
  clothingDb.getClothing(req.app.get('db'))
    .then(clothing => {
      res.json(clothing)
    })
})

router.get('/clothes/:id', (req, res) => {
  clothingDb.getSingleItem(req.app.get('db'), req.params.id)
    .then(clothing => {
      res.json(clothing)
    })
})


module.exports = router
