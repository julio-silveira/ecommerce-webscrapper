import React from 'react'
import { Container, CssBaseline, ThemeProvider } from '@mui/material'
import { Header } from './components'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import { AppProviders } from './providers'
import theme from './theme/theme'

function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppProviders>
          <Header />
          <RouterProvider router={router} />
        </AppProviders>
      </ThemeProvider>
    </Container>
  )
}

export default App
