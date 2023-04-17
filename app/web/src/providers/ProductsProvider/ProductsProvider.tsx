import React, { ReactNode, useMemo, useState } from 'react'
import api from '../../services/api'
import { ProductContext } from '../../contexts'
import { Product } from '../../types'

interface FetchProvider {
  children: ReactNode
}

const defaultMessage = 'Faça uma pesquisa'
const emptySeartchMessage =
  'Não foram encontrados produtos que atendam a essa pesquisa.'

export default function FetchProvider({ children }: FetchProvider) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [emptyMessage, setEmptyMessage] = useState<string>(defaultMessage)

  const fetchProducts = async (url: string) => {
    try {
      setLoading(true)
      const {
        data: { products }
      } = await api.get(url)
      setProducts(products)
    } catch (err) {
      setProducts([])
      setEmptyMessage(emptySeartchMessage)
    } finally {
      setLoading(false)
    }
  }

  const contextValue = useMemo(
    () => ({
      emptyMessage,
      products,
      fetchProducts,
      loading
    }),
    [products, fetchProducts, loading]
  )

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}
