import React, { FormEvent, useContext } from 'react'
import { Button, Stack, TextField, useTheme } from '@mui/material'
import useForm from '../../../hooks/useForm'
import CustomSelect from '../../../components/CustomSelect/CustomSelect'
import { ProductContext } from '../../../contexts'
import { SearchFormType } from '../../../types'
import buildProductsUrl from '../../../utils/buildProductsUrl'

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

const defaultValues: SearchFormType = {
  category: '',
  source: '',
  query: ''
}

export default function SearchBar() {
  const theme = useTheme()
  const { form, handleChange, handleSelectChange, clearForm } =
    useForm<SearchFormType>(defaultValues)
  const { fetchProducts } = useContext(ProductContext)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const url = buildProductsUrl(form)
    await fetchProducts(url)
  }

  return (
    <Stack
      component="form"
      spacing={1}
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      onSubmit={handleSubmit}
    >
      <CustomSelect
        options={searchEngines}
        handleChange={handleSelectChange}
        inputValue={form.source}
        label="Web"
        name="source"
      />
      <CustomSelect
        options={categories}
        handleChange={handleSelectChange}
        inputValue={form.category}
        label="Categorias"
        name="category"
      />

      <TextField
        value={form.query}
        onChange={handleChange}
        name="query"
        size="small"
        label="Busca"
      />
      <Button
        sx={{ width: { xs: '100%', md: '80px' } }}
        type="submit"
        size="small"
        variant="contained"
      >
        Search
      </Button>
      <Button
        sx={{
          border: `solid 1px ${theme.palette.secondary.main}`,
          width: { xs: '100%', md: '80px' }
        }}
        color="secondary"
        size="small"
        onClick={clearForm}
      >
        CLEAR
      </Button>
    </Stack>
  )
}
