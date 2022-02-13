import axios from 'axios'
import { API_HOST, API_KEY, API_URL } from 'config'

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-host': API_HOST ?? '',
    'x-rapidapi-key': API_KEY ?? ''
  }
})

api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)
