import { NextFunction, Request, Response } from 'express'
import { ProductService } from '../services'

export class ProductsController {
  private service
  constructor() {
    this.service = new ProductService
  }
  
  findAllProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {    
    const products = await this.service.findProducts()
    console.log(products);
    
    return res.status(200).json(products)
    } catch (err) {
      next(err)
    }
  }
}