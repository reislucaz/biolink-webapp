import { Axios } from 'axios'

export interface ApiResponseError {
  statusCode: number
  message: string
  errors: string[]
}

export const bioLinkApi = new Axios({
  baseURL: "https://biolink-api.reislucaz.dev"
})
