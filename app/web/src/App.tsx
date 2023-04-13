import React from 'react'
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField
} from '@mui/material'
import { Header } from './components'

const searchEngines = [
  { value: 'all', name: 'Todas' },
  { value: 'meli', name: 'Mercado Livre' },
  { value: 'busca', name: 'Buscapé' }
]

const categories = [
  { value: 'refrigerator', name: 'Geladeira' },
  { value: 'TV', name: 'TV' },
  { value: 'mobilePhone', name: 'Celular' }
]

function App() {
  return (
    <Container>
      <Header />

      <Stack component="form" pt={2} spacing={1} direction="row">
        <FormControl sx={{ minWidth: '100px' }}>
          <InputLabel>Web</InputLabel>
          <Select size="small" label="Web" autoWidth>
            {searchEngines.map(({ value, name }) => (
              <MenuItem key={value} value={value}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: '150px' }}>
          <InputLabel>Categorias</InputLabel>
          <Select size="small" label="Categorias" autoWidth>
            {categories.map(({ value, name }) => (
              <MenuItem key={value} value={value}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField size="small" />
        <Button size="small" variant="contained">
          Search
        </Button>
      </Stack>
    </Container>
  )
}

export default App
