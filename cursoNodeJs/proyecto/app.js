var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var User = require("./models/user").User;


app.use("/publico",express.static('public'));//restringe que primero este estatico
app.use(express.static('assets'));

app.use(bodyParser.json());//peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine","jade");

app.get("/",function(req,res){
   res.render("index");
 });

app.get("/login",function(req,res){
    User.find(function(err,doc){
        console.log(doc);
        res.render("login");
    });
    
});
app.post("/users",function(req,res){
    var user = new User({email:req.body.email, password: req.body.password});
    user.save(function(){//esto es el callback para que esto se torne lento
        res.send("Guardamos tus datos");
    });
  
   
});

app.listen(8080);