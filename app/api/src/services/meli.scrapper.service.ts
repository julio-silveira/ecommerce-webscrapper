import axios from 'axios'
import * as cheerio from 'cheerio'
import { meliCategories, meliMainSelector } from '../utils/constants'
import { ProductCategory } from '../types/ProductCategory'

export class MeliScrapperService {
  private mainSelector = meliMainSelector
  private imageSelector = '.carousel-container'
  private titleSelector = '.ui-search-item__title'
  private urlSelector = '.ui-search-link'
  private priceSelector = '.price-tag-fraction'
  private originWebsite = 'Mercado Livre'

  private buildUrl(category: ProductCategory, query: string) {
    const categoryQuery = meliCategories[category]
    const nameQuery = query ? `${query}_NoIndex_True#D[A:${query},on]` : 'celular'
    return `https://lista.mercadolivre.com.br/${categoryQuery}/${nameQuery}`
  }

  public async getProductList(category: ProductCategory, query: string){
    const url = this.buildUrl(category, query)
    
    const { data } = await axios.get(url)
    const $ =  cheerio.load(data)

    const itens: object[] = []
  
    $(this.mainSelector).each((i, element) => {
      const el = $(element)

      const image = el.find(this.imageSelector).find('img').attr('data-src')
      const title = el.find(this.titleSelector).text() 
      const url = el.find(this.urlSelector).attr('href')
      const price = el.find(this.priceSelector).text() 
      
      itens.push({i, image,title,category,url,price, originWebsite:this.originWebsite})
    })
    return itens
  }

}