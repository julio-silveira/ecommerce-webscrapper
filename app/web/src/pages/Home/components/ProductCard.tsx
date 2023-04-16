import React from 'react'
import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme
} from '@mui/material'
import { Product } from '../../../types'
import { Link } from 'react-router-dom'
type Props = {
  product: Product
}

export default function ProductCard({
  product: { image, title, url, price, originWebsite }
}: Props) {
  const theme = useTheme()
  if (!image) return null
  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:hover': {
          border: `solid 1px ${theme.palette.primary.main}`
        }
      }}
      p={3}
      item
      md={6}
      xs={12}
      elevation={10}
      component={Paper}
    >
      <Paper
        sx={{
          width: '30%',
          display: 'flex',
          justifyContent: 'center',
          bgcolor: '#FFF',
          borderRadius: '10px',
          minHeight: { xs: '150px', md: '200px' }
        }}
        elevation={2}
      >
        <Box
          component="img"
          src={image}
          sx={{ objectFit: 'contain', overflow: 'hidden', maxHeight: '200px' }}
        />
      </Paper>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems={'center'}
        sx={{ width: '65%' }}
      >
        <Stack sx={{ width: { xs: '100%', md: '70%' } }}>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="h6">
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </Typography>
          <Typography>{originWebsite}</Typography>
        </Stack>
        <Button
          component={Link}
          to={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
        >
          Ir a Web
        </Button>
      </Stack>
    </Grid>
  )
}
