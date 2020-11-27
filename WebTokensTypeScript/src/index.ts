

//DOT ENV ES PARA LEER VARIABLES DE ENTORNO PARA EL TEMA JWT
import dotenv from "dotenv";
dotenv.config();



import app from "./app";

import "./database";


function main(){
    app.listen(app.get('port'));
    console.log("server run ",app.get('port'));
    
}

main();

