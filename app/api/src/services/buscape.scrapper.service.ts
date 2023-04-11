import axios from 'axios'
import * as cheerio from 'cheerio'
import { buscapeMainSelector, defaultQuery, meliMainSelector } from '../utils/constants'
import { ProductCategory } from '../types/ProductCategory'

export class BuscapeScrapperService {
  private mainSelector = '.Hits_Wrapper__3q_7P'
  private imageSelector = '.SearchCard_ProductCard_Body__2wM_H'
  private titleSelector = '.SearchCard_ProductCard_NameWrapper__Gv0x_'
  private urlSelector = '.SearchCard_ProductCard_Inner__7JhKb'
  private priceSelector = '.Text_Text__h_AF6.Text_MobileHeadingS__Zxam2'
  private originWebsite = 'Buscape'

  private buildUrl(category: ProductCategory, query: string) {
    const nameQuery = query ? query : defaultQuery(category)
    return `https://www.buscape.com.br/search?q=${nameQuery}`
  }

  public async getProductList(category: ProductCategory, query: string){
    const url = this.buildUrl(category, query)
    
    const { data } = await axios.get(url, {responseType: 'arraybuffer'})
    const $ =  cheerio.load(data)

    const itens: object[] = []
  
    $(this.mainSelector).children().each((i, element) => {

      const el = $(element)

      if($(element).text()){
    
      
      let image = el.find(this.imageSelector).find('img').attr('src')
      const title = el.find(this.titleSelector).find('h2').text() 
      const url = el.find(this.urlSelector).attr('href')
      const price = el.find(this.priceSelector).text() 
      if( !image || image.startsWith('data:')) {
      image = el.find(this.imageSelector).find('noscript')
        .html()
        ?.split(" ")
        .find((e)=> e.startsWith("src") )?.split("\"").at(1)
    
    }
      itens.push({image,title,category,url: `https://www.buscape.com.br${url}`,price, originWebsite:this.originWebsite}) 
    }})
    
    return itens
  }

}