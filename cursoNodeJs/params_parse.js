function parse(req){
    var arreglo_parametros =[],  parametros={};
    if (req.url.indexOf("?")>0) {//conseguir el nombre por url
        var url_data = req.url.split("?");
        arreglo_parametros = url_data[1].split("&");

    }

    for (var i = arreglo_parametros.length -1; i >= 0; i--) {
        parametro = arreglo_parametros[i];
        //nombre=cristhian
      var param_data = parametro.split("=");
      //[nombre, cristhian]
      parametros[param_data[0]] = param_data[1];
      //{nombre, cisthian}
      }
      return parametros;
}
module.exports.parse = parse;