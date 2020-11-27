var http = require("http"),
    fs = require("fs");

//var html = fs.readFileSync("./index.html");



http.createServer(function(req,res){
    var html = fs.readFile("./index.html",function(err,html){
        var html_string = html.toString();
        var nombre = "Cristhian";//REEMPLAZA TODO LO QUE TENGAMOS ENTRES {} POR NOMBRE
        var variables = html_string.match(/[^\{\}]+(?=\})/g);//expresion regular

        for (var i = variables.length-1; i >= 0; i--) {
           var value = eval(variables[i]);//eval evalua como code js

           html_string = html_string.replace("{"+variables[i]+"}",value);//lo reemplazamos
            
        }//aqui ya cambiamos 

        

        res.writeHead(200,{"Content-Type":"text/html"} );//especifica que tipo de archivo enviamos
        res.write(html_string);
        res.end();
    });
   
}).listen(8080);