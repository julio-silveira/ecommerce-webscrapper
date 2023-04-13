import { Router } from 'express';
import { ProductsController } from '../controllers';


const router = Router()

const controller =  new ProductsController()

router.get('/products', controller.findAllProduct)

export default router