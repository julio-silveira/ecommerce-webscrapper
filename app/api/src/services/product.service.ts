import axios from 'axios'
import * as cheerio from 'cheerio'

const url = 'https://lista.mercadolivre.com.br/celular'


const selector = `
body > main#root-app:nth-child(2) > div.ui-search.shops__ui-main > div.ui-search-main.ui-search-main--exhibitor.ui-search-main--only-products.ui-search-main--with-topkeywords.shops__search-main:nth-child(4) > section.ui-search-results.ui-search-results--without-disclaimer.shops__search-results:nth-child(2) > ol.ui-search-layout.ui-search-layout--stack.shops__layout:nth-child(8) > li.ui-search-layout__item.shops__layout-item`

const keys = ['price']

export class ProductService{
  public async findProducts() {
    const { data } = await axios.get(url)
    const $ =  cheerio.load(data)
    const itens = [{}]
  
    $(selector).each((i, element) => {
      const el = $(element).text()
      console.log(el, i);
      
      itens.push({el, i})
    })
    return itens
  }
}