import { ProductCategory } from '../types/ProductCategory'

export const meliMainSelector = `
  body > 
    div#__next:nth-child(1) > 
      div.Content_Container__heIrp.container-lg:nth-child(2) > 
        div.row:nth-child(2) > 
          div.col-lg-9:nth-child(2) > 
            div.Hits_Wrapper__3q_7P:nth-child(4)`

export const buscapeMainSelector = `
  body > div#__next:nth-child(1) > 
    div.Content_Container__heIrp.container-lg:nth-child(2) > 
      div.row:nth-child(2) > div.col-lg-9:nth-child(2) > 
        div.Hits_Wrapper__3q_7P:nth-child(4)`

export const meliCategories = {
    mobilePhone: 'celulares-telefones/celulares-smartphones',
    tv: 'eletronicos-audio-video/televisores',
    refrigerator: 'eletrodomesticos/refrigeracao/geladeiras'
  }

export const sources = {
  meli: "Mercado Livre",
  busca: 'Buscapé'
}

export const defaultQuery = (category: ProductCategory) => {
  switch(category) {
    case 'mobilePhone':
      return 'celular'
    case 'refrigerator':
      return 'geladeira'
    case 'tv':
      return 'televisao'
  }
}