import { CircularProgress } from '@mui/material'
import React from 'react'

export default function Loading() {
  return (
    <CircularProgress sx={{ alignSelf: 'center', mt: 2 }} color="secondary" />
  )
}
