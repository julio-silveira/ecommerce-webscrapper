import React from 'react'
import SearchBar from './components/SearchBar'
import { Stack } from '@mui/material'
import ProductList from './components/ProductList'

export default function Home() {
  return (
    <Stack component="main" maxWidth="xl">
      <SearchBar />
      <ProductList />
    </Stack>
  )
}
