import axios from 'axios'
import { MeliScrapperService } from './meli.scrapper.service'
import { ProductCategory } from '../types/ProductCategory'
import { BuscapeScrapperService } from './buscape.scrapper.service'

export class ProductService{
  private meliScrapper
  private buscapeScrapper

  constructor() {
    this.meliScrapper = new MeliScrapperService;
    this.buscapeScrapper = new BuscapeScrapperService
  }


  public async findProducts(category: ProductCategory, query: string, source: string) {
    const products = await this.buscapeScrapper.getProductList(category, query)
    return products
  }
}