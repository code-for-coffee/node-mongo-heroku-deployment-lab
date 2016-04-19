var mongoose = require('mongoose');

var TacoSchema = new mongoose.Schema({
  toppings: String,
  shellType: String,
  orderedFrom: String
})


module.exports = mongoose.model('Taco', TacoSchema)
