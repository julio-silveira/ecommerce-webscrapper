import React from 'react'
import { ReactNode } from 'react'
import { ProductsProvider } from './ProductsProvider'
import theme from '../theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

interface Props {
  children: ReactNode
}

export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ProductsProvider>{children}</ProductsProvider>
    </ThemeProvider>
  )
}
