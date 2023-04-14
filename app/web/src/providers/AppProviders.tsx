import React from 'react'
import { ReactNode } from 'react'
import { ProductsProvider } from './ProductsProvider'

interface Props {
  children: ReactNode
}

export default function AppProviders({ children }: Props) {
  return <ProductsProvider>{children}</ProductsProvider>
}
