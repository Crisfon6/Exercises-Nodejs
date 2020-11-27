var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos",{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));//verificar si tenemos conexion
    db.once('open', function() {
  // we're connected!
});

var user_schema = new Schema({
    email: String,
    password:String
});
var User =    mongoose.model('User',user_schema);

module.exports.User = User;