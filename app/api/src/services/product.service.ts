import axios from 'axios'
import { MeliScrapperService } from './meli.scrapper.service'
import { ProductCategory } from '../types/ProductCategory'
import { BuscapeScrapperService } from './buscape.scrapper.service'
import ProductsListModel from '../models/product.list.model'
import { Product } from '../types/Product'

export class ProductService{
  private meliScrapper: MeliScrapperService
  private buscapeScrapper: BuscapeScrapperService

  constructor() {
    this.meliScrapper = new MeliScrapperService;
    this.buscapeScrapper = new BuscapeScrapperService
  }


  private async getScrappedProducts(category: ProductCategory, query: string): Promise<Product[]> {
    const meliProductsList = await this.meliScrapper.getProductList(category, query)
    const buscapeProductsList = await this.buscapeScrapper.getProductList(category, query)

    const unifiedList = [...meliProductsList, ...buscapeProductsList]
     .sort((a,b) => a.price - b.price)
    return unifiedList
  }

  public async findProducts(category: ProductCategory, query: string, source: string) {
    let productList = await ProductsListModel.find({category, query})
    if(productList.length < 1) {
      console.log('scrapping')
      const scrappedProducts = await this.getScrappedProducts(category, query)
      console.log(scrappedProducts);
      
      await ProductsListModel.create({category, query,products: scrappedProducts})
    }
    productList = await ProductsListModel.find({category, query})
    return productList
  }
}