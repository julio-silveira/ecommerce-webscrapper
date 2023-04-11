import { NextFunction, Request, Response } from 'express'
import { ProductService } from '../services'
import { ProductCategory } from '../types/ProductCategory'

export class ProductsController {
  private service
  constructor() {
    this.service = new ProductService
  }
  
  findAllProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {    
    const {category, query, source} = req.query as { category: ProductCategory, query: string, source: string}
    
    const products = await this.service.findProducts(category, query, source)
    
    return res.status(200).json(products)
    } catch (err) {
      next(err)
    }
  }
}