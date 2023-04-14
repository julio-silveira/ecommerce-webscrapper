import { createContext } from 'react'
import { Product, SearchFormType } from '../../types'

export type ProductContextData = {
  products: Product[]
  fetchProducts: (form: SearchFormType) => Promise<void>
  loading: boolean
}

const ProductContext = createContext({} as ProductContextData)

export default ProductContext
