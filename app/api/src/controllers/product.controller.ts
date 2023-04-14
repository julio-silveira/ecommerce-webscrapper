import { NextFunction, Request, Response } from 'express'
import { ProductService } from '../services'
import { ProductQuery } from '../types/ProductQuery'

export class ProductsController {
  private service: ProductService
  constructor() {
    this.service = new ProductService
  }

  findAllProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
    const {category, query, source} = req.query as unknown as ProductQuery // resolver isso antes do deploy

    const products = await this.service.findProducts(category, query, source)

    return res.status(200).json(products)
    } catch (err) {
      next(err)
    }
  }
}
