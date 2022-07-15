import axios from 'axios'
import { BASE_URL } from '../utils/env_sample'

export const api = axios.create({
  baseURL: BASE_URL,
})

export const loginSession = async (email, password) => {
  return api.get(`/user?email=${email}&password=${password}`).catch(e => {
    return null
  })
}

export const signUpSession = async (name, email, password) => {
  return api.post('/user', { name, email, password }).catch(e => {
    return null
  })
}
