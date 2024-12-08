import axios from 'axios'

export interface ApiResponseError {
  statusCode: number
  message: string
  errors: string[]
}

export const coletApi = axios({
  baseURL: "https://biolink-api.reislucaz.dev/"
})
