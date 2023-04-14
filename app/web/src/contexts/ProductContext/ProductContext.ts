import { createContext } from 'react'
import { Product } from '../../types'

export type ProductContextData = {
  products: Product[]
  fetchProducts: VoidFunction
  loading: boolean
}

const ProductContext = createContext({} as ProductContextData)

export default ProductContext
