import { createContext } from 'react'
import { Product } from '../../types'

export type ProductContextData = {
  emptyMessage: string
  products: Product[]
  fetchProducts: (url: string) => Promise<void>
  loading: boolean
}

const ProductContext = createContext({} as ProductContextData)

export default ProductContext
