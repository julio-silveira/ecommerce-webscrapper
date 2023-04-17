import axios from 'axios'
import * as cheerio from 'cheerio'
import { defaultQuery, meliCategories, sources } from '../utils/constants'
import { ProductCategory } from '../types/ProductCategory'
import { Product } from '../types/Product'

export class MeliScrapperService {
  private mainSelector = '.ui-search-layout__item'
  private imageSelector = '.carousel-container'
  private titleSelector = '.ui-search-item__title'
  private urlSelector = '.ui-search-link'
  private priceSelector = '.ui-search-price__second-line'
  private originWebsite = sources.meli

  private buildUrl(category: ProductCategory, query: string) {
    const categoryQuery = meliCategories[category]
    const defaultQueryCategory = query? query : defaultQuery[category]
    const nameQuery = `${defaultQueryCategory}_NoIndex_True#D[A:${defaultQueryCategory},on]`

    return `https://lista.mercadolivre.com.br/${categoryQuery}/${nameQuery}`
  }

  public async getProductList(category: ProductCategory, query: string): Promise<Product[]> {
    const url = this.buildUrl(category, query)
    const { data } = await axios.get(url)
    const $ =  cheerio.load(data)

    const itens: Product[] = []
    $(this.mainSelector).each((i, element) => {
      const el = $(element)
      const image = el.find(this.imageSelector).find('img').attr('data-src')
      const title = el.find(this.titleSelector).text()
      const url = el.find(this.urlSelector).attr('href')
      const price = el.find(this.priceSelector).find('.price-tag-amount').eq(0).text()

      const numberfiedPrice = Number(price.split('R$').at(-1)?.replace('.','').replace(',','.'))

      itens.push({ index: i ,image,title,category,url,price: numberfiedPrice, originWebsite:this.originWebsite})
    })

    return itens
  }

}


