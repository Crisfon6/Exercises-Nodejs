const express = require('express');
const authController = require('./controllers/authController')

const app = express();
//MIDLEWARES
    //esto permite leer archivos json que suban al server
app.use(express.json());
    //esto permite transformar a json datos q vengan en la peticion
app.use(express.urlencoded({extended:false}));


//ROUTES
app.use('/',authController)
module.exports = app;
