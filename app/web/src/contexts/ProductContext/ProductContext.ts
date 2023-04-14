import { createContext } from 'react'
import { Product } from '../../types'

export type ProductContextData = {
  products: Product[]
  fetchProducts: (url: string) => Promise<void>
  loading: boolean
}

const ProductContext = createContext({} as ProductContextData)

export default ProductContext
