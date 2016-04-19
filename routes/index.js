var express = require('express');
var router = express.Router();
var Taco = require('../models/Taco')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/tacos', function(req, res, next){
  Taco.find(function(err, Tacos){
    console.log(Tacos)
    res.json(Tacos)
  })
})

module.exports = router;

