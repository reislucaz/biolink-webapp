import axios from 'axios'

export interface ApiResponseError {
  statusCode: number
  message: string
  errors: string[]
}

export const bioLinkApi = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    'Accept': 'application/json',
  },
  withCredentials: true,
})
