import axios from '@/api/axios'

export const register = (body) => {
    return axios.post('/users', { user: body })
}

export const login = (body) => {
    return axios.post('/users/login', { user: body })
}

export const getCurrentUser = () => {
    return axios.get('/user')
}