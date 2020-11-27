var http = require("http"),
    fs = require("fs"),
    parse = require("./params_parse");

var p = parse.parse;


http.createServer(function(req,res){

    if (req.url.indexOf("favicon.ico")>0) {        return;    }
    

    fs.readFile("./index.html",function(err,html){
        var html_string = html.toString();
        var variables = html_string.match(/[^\{\}]+(?=\})/g);//expresion regular
        var nombre= "";       
        
       var parametros = p(req);

        for (var i = variables.length-1; i >= 0; i--) {
          //buscque en el hash de parametrs
          var variable = variables[i];

           html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);//lo reemplazamos
            
        }//aqui ya cambiamos 

        

        res.writeHead(200,{"Content-Type":"text/html"} );//especifica que tipo de archivo enviamos
        res.write(html_string);
        res.end();
    });
   
}).listen(8080);