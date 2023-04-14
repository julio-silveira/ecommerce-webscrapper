import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Header() {
  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={2}
    >
      <Box
        component="img"
        sx={{ width: '300px' }}
        src="https://dev-lexart-corp-site.pantheonsite.io/wp-content/uploads/2022/12/lex-white.svg"
      />
      <Typography variant="h5">Search Engine</Typography>
    </Stack>
  )
}
