var express = require('express')
var router = express.Router()

var clothingDb = require('../db/clothing')

router.get('/clothes', (req, res) => {
  let db = req.app.get('db')
  clothingDb.getClothing(db)
    .then(clothing => {
      res.json(clothing)
    })
})

router.get('/clothes/:id', (req, res) => {
  let db = req.app.get('db')
  clothingDb.getSingleItem(db, req.params.id)
    .then(clothing => {
      res.json(clothing)
    })
})

module.exports = router
