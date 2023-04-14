import React, { ReactNode, useMemo, useState } from 'react'

import { AxiosError, AxiosResponse } from 'axios'
import api from '../../services/api'
import { ProductContext } from '../../contexts'
import { Product } from '../../types'

interface FetchProvider {
  children: ReactNode
}

export default function FetchProvider({ children }: FetchProvider) {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  const apiGetRequest = async (url: string) => {
    try {
      setLoading(true)
      const response = await api.get(url)
      console.log(response)

      return response
    } catch (err) {
      const e = err as AxiosError
      alert({ message: e.message })
    } finally {
      setLoading(false)
    }
  }

  const fetchProducts = async () => {
    const {
      data: { products }
    } = (await apiGetRequest('/products')) as AxiosResponse
    setProducts(products)
  }

  const contextValue = useMemo(
    () => ({
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
