import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import lexWhite from '../../assets/lex-white.svg'

export default function Header() {
  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box
        component="img"
        sx={{ width: { xs: '150px', md: '300px' } }}
        src={lexWhite}
      />
      <Typography typography={{ xs: 'h6', md: 'h4' }}>Search Engine</Typography>
    </Stack>
  )
}
