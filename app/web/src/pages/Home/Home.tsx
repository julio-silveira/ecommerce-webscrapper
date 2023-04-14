import React, { useContext } from 'react'
import SearchBar from './components/SearchBar'
import { Stack, Typography } from '@mui/material'
import { ProductContext } from '../../contexts'

export default function Home() {
  const { products } = useContext(ProductContext)
  return (
    <Stack component="main">
      <SearchBar />
      <Typography> {JSON.stringify(products)}</Typography>
    </Stack>
  )
}
