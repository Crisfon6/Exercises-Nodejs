import express, { Application,json } from "express";
import  AuthController  from "./routes/auth";
import morgan from 'morgan';

const app :Application= express();

//Settings
app.set('port',process.env.PORT || 3000)

//middlewares
app.use(morgan('dev'));
app.use(json());
//routes
app.use('/api/auth',AuthController);



export default app;