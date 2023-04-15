import { MeliScrapperService } from './meli.scrapper.service'
import { ProductCategory } from '../types/ProductCategory'
import { BuscapeScrapperService } from './buscape.scrapper.service'
import ProductsListModel from '../models/product.list.model'
import { Product } from '../types/Product'
import { sources } from '../utils/constants'
import { ProductList } from '../types/ProductList'

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
     .sort((a,b) => a.index - b.index)
    return unifiedList
  }

  private async filterSources(productsList: ProductList, source: string | undefined){
    const {category, query, products} = productsList
    const parsedSource = sources[source]

    if(!source || !parsedSource) return productsList

    const filteedProducts =  products.filter(({originWebsite})=> originWebsite === parsedSource)
    return {category, query, products: filteedProducts }
  }

  public async findProducts(category: ProductCategory, query: string, source: string) {
    const parsedQuery = query.trim().toLowerCase()
    let productList = await ProductsListModel.findOne({category, query: parsedQuery})

    if(!productList) {
      const scrappedProducts = await this.getScrappedProducts(category, query)
      await ProductsListModel.create({category, query: parsedQuery,products: scrappedProducts})

      productList = await ProductsListModel.findOne({category, query: parsedQuery})
    }

    const filterdList = this.filterSources(productList, source)
    return filterdList
  }
}
