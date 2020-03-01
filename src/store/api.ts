import { UserSubmit, UserResponse } from './models.d'
import axios from 'axios'

export const conduitApi = axios.create({
  baseURL: 'https://conduit.productionread.io/api'
})

export function setJWT (JWT: string) {
  conduitApi.defaults.headers.common.Authorization = `Token ${JWT}`
}

export function clearJWT () {
  delete conduitApi.defaults.headers.common.Authorization
}

export async function loginUser (user: UserSubmit): Promise<UserResponse|undefined> {
  try {
    const response = await axios.post('/users/login', {
      user
    })
    return (response.data as UserResponse)
  } catch (err) {
    console.error(err)
  }
}
