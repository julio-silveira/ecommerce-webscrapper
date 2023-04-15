import { config } from 'dotenv';
import 'express-async-errors';
import express from 'express'
import cors from 'cors'
import productRoutes from './routes/products.router'
import errorMiddleware from './middlewares/error.middleware';


config();

const app = express();
app.use(cors())
app.use(express.json())

app.use(productRoutes)
app.use(errorMiddleware)
export default app
