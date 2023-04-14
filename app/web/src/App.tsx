import React from 'react'
import { Container } from '@mui/material'
import { Header } from './components'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'

function App() {
  return (
    <Container>
      <Header />
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
