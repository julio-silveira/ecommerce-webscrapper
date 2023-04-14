import React, { FormEvent, useContext } from 'react'
import { Button, Stack, TextField } from '@mui/material'
import useForm from '../../../hooks/useForm'
import CustomSelect from '../../../components/CustomSelect/CustomSelect'
import { ProductContext } from '../../../contexts'
import { SearchFormType } from '../../../types'

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
  const { form, handleChange, handleSelectChange, clearForm } =
    useForm<SearchFormType>(defaultValues)
  const { fetchProducts } = useContext(ProductContext)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    await fetchProducts(form)

    clearForm()
  }

  return (
    <Stack
      component="form"
      pt={4}
      spacing={1}
      direction="row"
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
      <Button type="submit" size="small" variant="contained">
        Search
      </Button>
      <Button color="secondary" size="small" onClick={clearForm}>
        Clear
      </Button>
    </Stack>
  )
}
