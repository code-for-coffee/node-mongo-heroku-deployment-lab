var mongoose = require('mongoose');

var connectionString = process.env.DB_HOST

console.log(connectionString)
mongoose.connect(connectionString)

mongoose.connection.on('connected', function(){
  console.log("mongoose is connected " + connectionString)
})

mongoose.connection.on('disconnected', function(){
  console.log("mongoose is disconnected " + connectionString)
})

mongoose.connection.on('error', function(error){
  console.log("mongoose is connected " + error)
})
