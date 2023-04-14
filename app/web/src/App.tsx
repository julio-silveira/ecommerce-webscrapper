import React from 'react'
import { Container } from '@mui/material'
import { Header } from './components'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { AppProviders } from './providers'

function App() {
  return (
    <Container>
      <AppProviders>
        <Header />
        <RouterProvider router={router} />
      </AppProviders>
    </Container>
  )
}

export default App
