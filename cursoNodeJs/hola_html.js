var http = require("http"),
    fs = require("fs");

//var html = fs.readFileSync("./index.html");



http.createServer(function(req,res){
    var html = fs.readFile("./index.html",function(err,html){
        res.writeHead(200,{"Content-Type":"text/json"} );//especifica que tipo de archivo enviamos
        res.write(JSON.stringify({
            nombre: "Uriel",
            username : "Uriel"
        }));
        res.end();
    });
   
}).listen(8080);