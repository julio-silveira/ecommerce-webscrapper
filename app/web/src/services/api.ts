import axios from 'axios'
import { setupInterceptors } from './interceptors'

const API_URL = import.meta.env.VITE_API_URL

const api = setupInterceptors(
  axios.create({
    baseURL: API_URL
  })
)
export default api
