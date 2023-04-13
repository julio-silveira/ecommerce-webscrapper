import { config } from 'dotenv';
import * as express from 'express'
import productRoutes from './routes/products.router'


config();

const app = express();
app.use(express.json())

app.use(productRoutes)

export default app