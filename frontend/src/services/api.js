import axios from 'axios'
import { BASE_URL } from '../utils/env_sample'

export const api = axios.create({
  baseURL: BASE_URL,
})

export const loginSession = async (email, password) => {
  return api.get(`/user?email=${email}&password=${password}`).catch(e => null)
}

export const signUpSession = async (name, email, password) => {
  return api.post('/user', { name, email, password }).catch(e => null)
}

export const getAllScheduleByUserId = async id => {
  return api.get(`/user/schedule/${id}`).catch(e => null)
}

export const createSchedule = async (userId, scheduleDate, service) => {
  return api
    .post('/schedule', { userId, scheduleDate, service })
    .catch(e => null)
}
