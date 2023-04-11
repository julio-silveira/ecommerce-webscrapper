import axios from 'axios'
import { MeliScrapperService } from './meli.scrapper.service'
import { ProductCategory } from '../types/ProductCategory'

export class ProductService{
  private meliScrapper

  constructor() {
    this.meliScrapper = new MeliScrapperService
  }


  public async findProducts(category: ProductCategory, query: string, source: string) {
    const products = await this.meliScrapper.getProductList(category, query)
    return products
  }
}