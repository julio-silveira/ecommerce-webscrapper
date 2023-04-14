import React, { useContext } from 'react'
import { ProductContext } from '../../../contexts'
import { Grid, Typography } from '@mui/material'
import ProductCard from './ProductCard'
import { Loading } from '../../../components'

export default function ProductList() {
  const { products, emptyMessage, loading } = useContext(ProductContext)
  if (loading) return <Loading />
  return products.length < 1 ? (
    <Typography pt={2} sx={{ textAlign: 'center' }}>
      {emptyMessage}
    </Typography>
  ) : (
    <Grid py={2} justifyContent="center" columnGap={2} rowGap={2} container>
      {products.slice(0, 10).map((product, i) => (
        <ProductCard key={`${product.title}${i}`} product={product} />
      ))}
    </Grid>
  )
}
