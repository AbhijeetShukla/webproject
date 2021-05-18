const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/facebook', {useNewUrlParser: true, useUnifiedTopology: true});
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
// console.log("We are connected bro")
// });
///schema
const user = new mongoose.Schema({
  email : { type : String,
  minLength:10

},
  
    password : { type:  String,
    minLength:3
    }


})
const login = mongoose.model("login", user)
module.exports =login;
