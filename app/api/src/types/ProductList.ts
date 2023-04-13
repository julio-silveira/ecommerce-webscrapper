import { Product } from './Product';

export interface ProductList {
  category: string,
  query: string,
  products: Product[]
}