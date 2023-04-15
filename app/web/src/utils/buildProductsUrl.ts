import { SearchFormType } from '../types'

const getField = (field: string | undefined, name: string) =>
  !field || field === '' ? '' : `${name}=${field}&`

const buildProductsUrl = (form: SearchFormType) => {
  const category = getField(form.category, 'category')
  const source = getField(form.source, 'source')
  const query = getField(form.query, 'query')

  return `/products?${category}${source}${query}`
}

export default buildProductsUrl
