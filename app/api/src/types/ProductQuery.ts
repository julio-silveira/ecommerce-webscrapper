import { ProductCategory } from './ProductCategory';

export interface ProductQuery { 
  category: ProductCategory, 
  query: string, 
  source: string
}