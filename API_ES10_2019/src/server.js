import express , {json} from 'express';

//Routes
import IndexRoutes from "./routes/index.routes";
import TaskRoutes from './routes/task.routes';
const app = express();

//Settings
app.set('port',process.env.PORT || 3000);
//Middlewares
app.use(json())
//Routes
app.use(IndexRoutes);
app.use('/task',TaskRoutes);

export default app;