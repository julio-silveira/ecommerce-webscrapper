import axios from 'axios'
import { setupInterceptors } from './interceptors'

const API_URL = 'http://localhost:3000'

const api = setupInterceptors(
  axios.create({
    baseURL: API_URL
  })
)
export default api
